const { productsModel, sellersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { getTokenData } = require("../config/jwt");
const cloudinary = require("../utils/handleCloudinary");
const { sendEmail, getTemplateFollowers } = require("../config/nodemailer");

const getSeller = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const seller = await sellersModel.findById(id).populate("products");

    //!OCULTO PASSWORD
    seller.set("password", undefined, { strict: false });

    res.send(seller);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PERFIL");
  }
};

const updatePerfilSeller = async (req, res) => {
  try {
    //!BUSCO SELLER EN LA DB
    const { id } = req.params;
    const { name, lastname, description } = req.body;

    //!ACTUALIZO
    const seller = await sellersModel.findOneAndUpdate(
      { _id: id },
      { $set: { name, lastname, description } }
    );

    //!RESPUESTA
    res.send("Perfil actualizado");
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_PERFIL");
  }
};

const createProduct = async (req, res) => {
  try {
    const body = matchedData(req);

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    if (!req.file) {
      handleHttpError(res, "NOT_IMAGE");
      return;
    }
    //!CREO PRODUCTO
    const product = await productsModel.create(body);

    //!ASIGNO ID DEL SELLER AL PRODUCTO
    product.seller = dataToken._id;

    //!REQUIERO Y SUBO IMAGEN
    const fileData = await cloudinary.uploader.upload(req.file.path);

    //!AGREGO IMAGEN AL PRODUCTO
    product.image.url = fileData.url;
    product.image.filename = fileData.public_id;

    //!GUARDO PRODUCTO
    await product.save();

    //!BUSCO AL SELLER EN LA DB
    const seller = await sellersModel.findOne({ email: dataToken.email });

    //!AGREGO PRODUCTO AL SELLER
    seller.products = seller.products.concat(product._id);

    //!GUARDO SELLER ACTUALIZADO
    await seller.save();

    await seller.followers.forEach((email) => {
      //!OBTENER TEMPLATE PARA EMAIL
      const template = getTemplateFollowers(
        seller.name,
        seller.lastname,
        seller._id
      );

      //!ENVIAR EMAIL DE AVISO
      sendEmail(email, "Valen App", template);
    });

    //!RESPUESTA
    res.send({
      msg: "Producto creado correctamente",
      product,
    });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_PRODUCT");
  }
};

const updateProduct = async (req, res) => {
  try {
    //!PARAMETROS
    const { id } = req.params;
    const { name, color, category, sizes, price, description } = req.body;

    //!BUSCO Y ACTUALIZO PRODUCTO
    const product = await productsModel.findOneAndUpdate(
      { _id: id },
      { $set: { name, color, category, sizes, price, description } }
    );

    //!RESPUESTA
    res.send({ product, msg: "Producto actualizado" });
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_PRODUCT");
  }
};

const updateProductImage = async (req, res) => {
  try {
    //!BUSCO PRODUCT EN LA DB
    const { id } = matchedData(req);
    const product = await productsModel.findById(id);

    //!REQUIERO Y SUBO IMAGEN
    if (!req.file) {
      handleHttpError(res, "NOT_IMAGE");
      return;
    }
    //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
    cloudinary.v2.uploader.destroy(product.image.filename);

    //!SUBO IMAGEN
    const fileData = await cloudinary.uploader.upload(req.file.path);

    //!ACTUALIZO IMAGEN DEL USER
    product.image.url = fileData.url;
    product.image.filename = fileData.public_id;

    await product.save();

    //!RESPUESTA
    res.send(product);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_PRODUCT_IMAGE");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!ELIMINO REFERENCIA AL PRODUCTO DEL SELLER
    const seller = await sellersModel.update(
      { _id: dataToken._id },
      { $pull: { products: id } },
      { multi: true }
    );

    //!BUSCO PRODUCTO Y ELIMINO IMAGEN(ARCHIVO)
    const product = await productsModel.findById(id);
    cloudinary.v2.uploader.destroy(product.image.filename);

    //!ELIMINO PRODUCTO
    await productsModel.deleteOne({ _id: id });

    //!RESPUESTA
    res.send("Producto borrado");
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_PRODUCT");
  }
};

const banProduct = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    await productsModel.delete({ _id: id });

    res.send("Producto suspendido");
  } catch (error) {
    handleHttpError(res, "ERROR_BAN_IPRODUCT");
  }
};

const unbanProduct = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    //!RESTABLESCO PRODUCTO
    await productsModel.restore({ _id: id });

    res.send("Producto habilitado");
  } catch (error) {
    handleHttpError(res, "ERROR_UNBAN_IPRODUCT");
  }
};

module.exports = {
  getSeller,
  updatePerfilSeller,
  createProduct,
  updateProduct,
  updateProductImage,
  deleteProduct,
  banProduct,
  unbanProduct,
};
