const { productsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");

const getProducts = async (req, res) => {
  try {
    const data = await productsModel.find();
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUCTS");
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await productsModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUCT");
  }
};

module.exports = {
  getProducts,
  getProduct,
};
