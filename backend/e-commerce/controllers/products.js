const { productsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError")

const getProducts = async (req, res) => {
    try {
        const data = await productsModel.find()
        res.send(data)
    } catch (error) {
        handleHttpError(res, "ERROR_GET_PRODUCTS");
    }
}

module.exports = {
    getProducts
}