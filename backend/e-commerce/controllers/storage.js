const fs = require("fs");
const path = require("path");
const { usersModel, sellersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { getTokenData } = require("../config/jwt");
const PUBLIC_URL = process.env.PUBLIC_URL;

const updateImage = async (req, res) => {
  try {
    //!ESTABLEZCO NOMBRE Y URL PARA LA IMAGEN SUBIDA
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER/SELLER EN LA DB
    const user = await usersModel.findOne({ email: dataToken.email });
    const seller = await sellersModel.findOne({ email: dataToken.email });

    if (user) {
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      if (user.profileimage.filename !== "defaultimage") {
        const filePath = path.join(
          `${__dirname}/../images/uploads/${user.profileimage.filename}`
        );
        fs.unlinkSync(filePath);
      }

      //!ACTUALIZO IMAGEN DEL USER
      user.profileimage.url = fileData.url;
      user.profileimage.filename = fileData.filename;
      await user.save();

      //!RESPUESTA
      res.send({ user });
    } else if (seller) {
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      if (seller.profileimage.filename !== "defaultimage") {
        const filePath = path.join(
          `${__dirname}/../images/uploads/${seller.profileimage.filename}`
        );
        fs.unlinkSync(filePath);
      }

      //!ACTUALIZO IMAGEN DEL USER
      seller.profileimage.url = fileData.url;
      seller.profileimage.filename = fileData.filename;
      await seller.save();

      //!RESPUESTA
      res.send({ seller });
    }
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_IMAGE");
  }
};

const deleteImage = async (req, res) => {
  try {
    //!BUSCO USER/SELLER
    const { id } = matchedData(req);
    const user = await usersModel.findById(id);
    const seller = await sellersModel.findById(id);

    if (user) {
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      const filePath = path.join(
        `${__dirname}/../images/uploads/${user.profileimage.filename}`
      );
      fs.unlinkSync(filePath);

      //!ESTABLEZCO IMAGEN POR DEFECTO
      user.profileimage.url =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      user.profileimage.filename = "defaultimage";
      await user.save();

      //!RESPUESTA
      res.send("Imagen borrada correctamente");
    } else {
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      const filePath = path.join(
        `${__dirname}/../images/uploads/${seller.profileimage.filename}`
      );
      fs.unlinkSync(filePath);

      //!ESTABLEZCO IMAGEN POR DEFECTO
      seller.profileimage.url =
        "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png";
      seller.profileimage.filename = "defaultimage";
      await seller.save();

      //!RESPUESTA
      res.send("Imagen borrada correctamente");
    }
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_IMAGE");
  }
};

module.exports = {
  updateImage,
  deleteImage,
};
