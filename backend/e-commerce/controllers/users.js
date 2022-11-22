const { usersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { getToken, getTokenData } = require("../config/jwt");
const { sendEmail, getTemplate } = require("../config/nodemailer");
const { encrypt, compare } = require("../utils/handlePassword");
const path = require("path")

const signUp = async (req, res) => {
  try {
    //! OBTENGO DATOS DEL USUARIO Y ENCRIPTO PASSWORD
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };

    // //! VERIFICO QUE EL USUARIO NO EXISTA
    let user = (await usersModel.findOne({ email: req.email })) || null;

    if (user !== null) {
      handleHttpError(res, "USER_ALREADY_EXIST", 404);
      return;
    }

    //!CREO UN NUEVO USUARIO
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

    res.send({
      success: true,
      msg: "Registro exitoso",
    });
  } catch (error) {
    handleHttpError(res, "ERROR_SIGNUP_USER");
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

    if (user === null) {
      handleHttpError(res, "USER_EMAIL_NOT_EXIST", 404);
      return;
    }

    // //! VERIFICO QUE EL USUARIO(ID) EXISTA
    if (data._id !== user._id.toString()) {
      handleHttpError(res, "USER_ID_NOT_EXIST", 404);
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
    res.sendFile(path.join(`${__dirname}/../views/confirm.html`))
  } catch (error) {
    handleHttpError(res, "ERROR_CONFIRM_TOKEN");
  }
};

const login = async (req, res) => {
  try {
    //!VERIFICO SI EL USUARIO(EMAIL) EXISTE
    req = matchedData(req);
    const user = await usersModel.findOne({ email: req.email });

    if (!user) {
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return;
    }
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

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = {
  signUp,
  confirmEmail,
  login,
};
