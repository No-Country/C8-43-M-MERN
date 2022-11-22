const fs = require("fs");
const path = require("path");
const { usersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { getTokenData } = require("../config/jwt");
const PUBLIC_URL = process.env.PUBLIC_URL;

const updateImage = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER EN LA DB
    const user = await usersModel.findOne({ email: dataToken.email });

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
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_UPDATE_IMAGE");
  }
};

const deleteImage = async (req, res) => {
  try {
    //!BUSCO USER
    const { id } = matchedData(req);
    const user = await usersModel.findById(id);

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
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = {
  updateImage,
  deleteImage,
};
