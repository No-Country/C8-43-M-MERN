const { usersModel, sellersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { getTokenData } = require("../config/jwt");
const cloudinary = require("../utils/handleCloudinary");


const updatePerfilImage = async (req, res) => {
  try {
    //!REQUIERO IMAGEN
    if (!req.file.path) {
      return res.send("Seleccione imagen");
    }

    //!SUBO IMAGEN
    const fileData = await cloudinary.uploader.upload(req.file.path);

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!BUSCO AL USER/SELLER EN LA DB
    const user = await usersModel.findOne({ email: dataToken.email });
    const seller = await sellersModel.findOne({ email: dataToken.email });

    if (user) {
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      if (user.profileimage.filename !== "defaultimage") {
        cloudinary.v2.uploader.destroy(user.profileimage.filename);
      }

      //!ACTUALIZO IMAGEN DEL USER
      user.profileimage.url = fileData.url;
      user.profileimage.filename = fileData.public_id;
      await user.save();

      //!RESPUESTA
      res.send({ user });
    } else if (seller) {
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      if (seller.profileimage.filename !== "defaultimage") {
        cloudinary.v2.uploader.destroy(seller.profileimage.filename);
      }

      //!ACTUALIZO IMAGEN DEL SELLER
      seller.profileimage.url = fileData.url;
      seller.profileimage.filename = fileData.public_id;
      await seller.save();

      //!RESPUESTA
      res.send({ seller });
    }
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_IMAGE");
  }
};

const deletePerfilImage = async (req, res) => {
  try {
    //!BUSCO USER/SELLER
    const { id } = matchedData(req);
    const user = await usersModel.findById(id);
    const seller = await sellersModel.findById(id);

    if (user) {
      if(user.profileimage.filename === "defaultimage") {
        res.send("No hay nada que borrar")
        return
      }
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      cloudinary.v2.uploader.destroy(user.profileimage.filename);

      //!ESTABLEZCO IMAGEN POR DEFECTO
      user.profileimage.url =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      user.profileimage.filename = "defaultimage";
      await user.save();

      //!RESPUESTA
      res.send("Imagen borrada correctamente");
    } else {
      if(seller.profileimage.filename === "defaultimage") {
        res.send("No hay nada que borrar")
        return
      }
      //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
      cloudinary.v2.uploader.destroy(seller.profileimage.filename);

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
  updatePerfilImage,
  deletePerfilImage,
};
