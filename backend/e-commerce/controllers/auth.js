const { usersModel, sellersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { getToken, getTokenData } = require("../config/jwt");
const {
  sendEmail,
  getTemplate,
  getTemplateReset,
} = require("../config/nodemailer");
const { encrypt, compare } = require("../utils/handlePassword");
const path = require("path");

const signUp = async (req, res) => {
  try {
    //! OBTENGO DATOS DEL USUARIO Y ENCRIPTO PASSWORD
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };

    //! VERIFICO QUE EL USUARIO NO EXISTA
    let user = (await usersModel.findOne({ email: req.email })) || null;
    let seller = (await sellersModel.findOne({ email: req.email })) || null;

    if (user !== null || seller !== null) {
      handleHttpError(res, "USER_SELLER_ALREADY_EXIST", 404);
      return;
    }

    //!CREO UN NUEVO USUARIO O VENDEDOR
    if (body.role === "user") {
      user = await usersModel.create(body);

      //!GENERAR EL TOKEN
      const token = {
        token: await getToken(user),
        user,
      };

      //!OBTENER TEMPLATE PARA EMAIL
      const template = getTemplate(user.name, token);

      //!ENVIAR EMAIL DE CONFIRMACION
      await sendEmail(user.email, "Email de prueba", template);

      //!GUARDO USUARIO EN LA DB
      await user.save();

      res.send("Registro exitoso");
    } else {
      seller = await sellersModel.create(body);

      //!GENERAR EL TOKEN
      const token = {
        token: await getToken(seller),
        seller,
      };

      //!OBTENER TEMPLATE PARA EMAIL
      const template = getTemplate(seller.name, token);

      //!ENVIAR EMAIL DE CONFIRMACION
      await sendEmail(seller.email, "Email de prueba", template);

      //!GUARDO SELLER EN LA DB
      await seller.save();

      res.send("Registro exitoso");
    }
  } catch (error) {
    handleHttpError(res, "ERROR_SIGNUP_USER_SELLER");
  }
};

const confirmEmail = async (req, res) => {
  try {
    //!OBTENGO TOKEN
    const { token } = req.params;

    //!VERIFICO DATOS
    let data = getTokenData(token);
    if (!data) {
      handleHttpError(res, "ERROR_NOT_DATA", 404);
      return;
    }

    //! VERIFICO QUE EL USUARIO(EMAIL) EXISTA
    let user = (await usersModel.findOne({ email: data.email })) || null;
    let seller = (await sellersModel.findOne({ email: data.email })) || null;

    if (user !== null) {
      // //! VERIFICO QUE EL USUARIO(ID) EXISTA
      if (data._id !== user._id.toString()) {
        handleHttpError(res, "ID_NOT_EXIST", 404);
        return;
      }

      //!ACTUALIZO STATUS DEL USER
      if (user.status !== "VERIFIED") {
        user.status = "VERIFIED";
      } else {
        handleHttpError(res, "USER_ALREADY_VERIFIED", 404);
        return;
      }
      await user.save();

      //!CONFIRMACION
      res.sendFile(path.join(`${__dirname}/../views/confirm.html`));
    } else if (seller !== null) {
      // //! VERIFICO QUE EL USUARIO(ID) EXISTA
      if (data._id !== seller._id.toString()) {
        handleHttpError(res, "ID_NOT_EXIST", 404);
        return;
      }

      //!ACTUALIZO STATUS DEL USER
      if (seller.status !== "VERIFIED") {
        seller.status = "VERIFIED";
      } else {
        handleHttpError(res, "SELLER_ALREADY_VERIFIED", 404);
        return;
      }
      await seller.save();

      //!CONFIRMACION
      res.sendFile(path.join(`${__dirname}/../views/confirm.html`));
    } else {
      handleHttpError(res, "EMAIL_NOT_EXIST", 404);
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_CONFIRM_TOKEN");
  }
};

const login = async (req, res) => {
  try {
    //!VERIFICO SI EL USUARIO(EMAIL) EXISTE
    req = matchedData(req);
    const user = await usersModel.findOne({ email: req.email });
    const seller = await sellersModel.findOne({ email: req.email });

    if (user) {
      //!VERIFICO SI EL USUARIO ESTA VERIFICADO
      if (user.status !== "VERIFIED") {
        handleHttpError(res, "USER_NOT_VERIFIED", 404);
        return;
      }

      //!VERIFICO EL PASSWORD
      const hashPassword = user.get("password");
      const check = await compare(req.password, hashPassword);

      if (!check) {
        handleHttpError(res, "PASSWORD_INVALID", 401);
        return;
      }

      //!OCULTO EL PASSWORD
      user.set("password", undefined, { strict: false });

      //!GENERO TOKEN DE SESION
      const data = {
        token: await getToken(user),
        user,
      };

      //!RESPUESTA
      res.send({ data });
    } else if (seller) {
      //!VERIFICO SI EL USUARIO ESTA VERIFICADO
      if (seller.status !== "VERIFIED") {
        handleHttpError(res, "SELLER_NOT_VERIFIED", 404);
        return;
      }

      //!VERIFICO EL PASSWORD
      const hashPassword = seller.get("password");
      const check = await compare(req.password, hashPassword);

      if (!check) {
        handleHttpError(res, "PASSWORD_INVALID", 401);
        return;
      }

      //!OCULTO EL PASSWORD
      seller.set("password", undefined, { strict: false });
    
      //!GENERO TOKEN DE SESION
      const data = {
        token: await getToken(seller),
        seller,
      };

      //!RESPUESTA
      res.send({ data });
    } else {
      handleHttpError(res, "USER__SELLER_NOT_EXIST", 404);
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

const sendEmailReset = async (req, res) => {
  try {
    //!VERIFICO SI EL USUARIO(EMAIL) EXISTE
    const user = await usersModel.findOne({ email: req.body.email });
    const seller = await sellersModel.findOne({ email: req.body.email });

    if (seller) {
      //!GENERAR EL TOKEN
      const token = {
        token: await getToken(seller),
        seller,
      };

      //!OBTENER TEMPLATE PARA EMAIL
      const template = getTemplateReset(
        seller._id.toString(),
        seller.name,
        token
      );

      //!ENVIAR EMAIL DE CONFIRMACION
      await sendEmail(seller.email, "Restaurar contraseña", template);

      //!RESPUESTA
      res.send("Email enviado correctamente");
    } else if (user) {
      //!GENERAR EL TOKEN
      const token = {
        token: await getToken(user),
        user,
      };

      //!OBTENER TEMPLATE PARA EMAIL
      const template = getTemplateReset(user._id.toString(), user.name, token);

      //!ENVIAR EMAIL DE CONFIRMACION
      await sendEmail(user.email, "Restaurar contraseña", template);

      //!RESPUESTA
      res.send("Email enviado correctamente");
    } else {
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_SEND_EMAIL_TO_RESET_PASSWORD");
  }
};

const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;

    //!VERIFICO SI EL USUARIO(EMAIL) EXISTE
    const user = await usersModel.findById(id);
    const seller = await sellersModel.findById(id);

    if (seller) {
      //!VERIFICO QUE EL TOKEN SEA EL CORRECTO
      await getTokenData(token);

      //!RESPUESTA
      res.send("Datos verificados correctamente");
    } else if (user) {
      //!VERIFICO QUE EL TOKEN SEA EL CORRECTO
      await getTokenData(token);

      //!RESPUESTA
      res.send("Datos verificados correctamente");
    } else {
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return;
    }
  } catch (error) {
    handleHttpError(res, "ERROR_TO_VERIFY_PASSWORD");
  }
};

const resetPasswordForm = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password, passwordRepeat } = req.body;

    //!VERIFICO TOKEN
    let data = getTokenData(token);
    if (!data) {
      handleHttpError(res, "ERROR_NOT_DATA", 404);
      return;
    }

    //!VERIFICO ID
    const userExist = (await usersModel.findById(id)) || null;
    const sellerExist = (await sellersModel.findById(id)) || null;

    if (userExist === null && sellerExist === null) {
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return;
    }

    //! VERIFICO QUE EL USUARIO EXISTA(DESDE EL TOKEN)
    let user = await usersModel.findOne({ email: data.email });
    let seller = await sellersModel.findOne({ email: data.email });

    if (seller) {
      //!VERIFICO CONTRASEÑAS
      if (password !== passwordRepeat) {
        handleHttpError(res, "ERROR_VERIFY_PASSWORD");
        return;
      }
      //!CAMBIO CONTRASEÑA
      seller.password = await encrypt(password);
      await seller.save();

      //!RESPUESTA
      res.send(seller);
    } else {
      //!VERIFICO CONTRASEÑAS
      if (password !== passwordRepeat) {
        handleHttpError(res, "ERROR_VERIFY_PASSWORD");
        return;
      }
      //!CAMBIO CONTRASEÑA
      user.password = await encrypt(password);
      await user.save();

      //!RESPUESTA
      res.send(user);
    }
  } catch (error) {
    handleHttpError(res, "ERROR_RESTORE_PASSWORD");
  }
};

module.exports = {
  signUp,
  confirmEmail,
  login,
  sendEmailReset,
  resetPassword,
  resetPasswordForm,
};
