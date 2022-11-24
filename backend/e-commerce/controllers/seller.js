const { productsModel, sellersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { getTokenData } = require("../config/jwt");

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
      product,
      msg: "Producto creado correctamente",
    });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_PRODUCT");
  }
};

const updateProduct = async (req, res) => {
  try {
    //!BUSCO PRODUCTO
    const { id } = req.params;
    const { name, color, category, sizes, price, description } = req.body;

    //!ACTUALIZO PRODUCTO
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

    //!ELIMINO PRODUCTO
    const product = await productsModel.deleteOne({ _id: id });

    //!RESPUESTA
    res.send("Producto borrado");
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_PRODUCT");
  }
};
module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
};
