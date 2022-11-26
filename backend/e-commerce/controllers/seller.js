const fs = require("fs");
const path = require("path");
const PUBLIC_URL = process.env.PUBLIC_URL;
const { productsModel, sellersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { getTokenData } = require("../config/jwt");

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
    const { name, lastname, description } = req.body
    const seller = await sellersModel.findOneAndUpdate(
      { _id: id },
      { $set: { name, lastname, description } }
    );

    res.send({ msg: "Perfil actualizado", seller });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_UPDATE_PERFIL");
  }
};

const createProduct = async (req, res) => {
  try {
    //!CREO PRODUCTO
    const body = matchedData(req);
    const product = await productsModel.create(body);

    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!ASIGNO ID DEL SELLER AL PRODUCTO
    product.seller = dataToken._id;

    //!ESTABLEZCO NOMBRE Y URL PARA LA IMAGEN SUBIDA
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    //!AGREGO IMAGEN AL PRODUCTO
    product.image.url = fileData.url;
    product.image.filename = fileData.filename;

    //!GUARDO PRODUCTO
    await product.save();

    //!BUSCO AL SELLER EN LA DB
    const seller = await sellersModel.findOne({ email: dataToken.email });

    //!AGREGO PRODUCTO AL SELLER
    seller.products = seller.products.concat(product._id);

    //!GUARDO SELLER ACTUALIZADO
    await seller.save();

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

    //!ELIMINO IMAGEN ANTERIOR(ARCHIVO)
    const filePath = path.join(
      `${__dirname}/../images/uploads/${product.image.filename}`
    );
    fs.unlinkSync(filePath);

    //!ESTABLEZCO NOMBRE Y URL PARA LA IMAGEN SUBIDA
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    //!ACTUALIZO IMAGEN DEL USER
    product.image.url = fileData.url;
    product.image.filename = fileData.filename;

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
    const filePath = path.join(
      `${__dirname}/../images/uploads/${product.image.filename}`
    );
    fs.unlinkSync(filePath);

    //!ELIMINO PRODUCTO
    await productsModel.deleteOne({ _id: id });

    //!RESPUESTA
    res.send("Producto borrado");
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_DELETE_PRODUCT");
  }
};
module.exports = {
  getSeller,
  updatePerfilSeller,
  createProduct,
  updateProduct,
  updateProductImage,
  deleteProduct,
};
