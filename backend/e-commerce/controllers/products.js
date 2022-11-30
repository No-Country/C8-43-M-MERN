const { sellersModel, productsModel } = require("../models");
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

const getSellers = async (req, res) => {
  try {
    const data = await sellersModel.find().populate("products")
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUCTS");
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await productsModel.findById(id).populate("seller");
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUCT");
  }
};

const getProductSearch = async (req, res) => {
  try {
    const search = await productsModel.find({
      name: new RegExp(req.query.name.toLowerCase(), "i"),
    });
    res.send(search);
  } catch (error) {
    handleHttpError(res, "ERROR_SEARCH_PRODUCT");
  }
};

module.exports = {
  getProducts,
  getSellers,
  getProduct,
  getProductSearch,
};
