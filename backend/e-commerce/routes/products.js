const express = require("express");
const router = express.Router();
const { getProducts, getProduct, getProductSearch } = require("../controllers/products");
const { validatorGetItem } = require("../validators/products");

router.get("/", getProducts);
router.get("/:id", validatorGetItem, getProduct);
router.get("/", getProductSearch)

module.exports = router;
