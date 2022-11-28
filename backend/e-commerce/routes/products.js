const express = require("express");
const router = express.Router();
const { getProducts, getSellers, getProduct, getProductSearch } = require("../controllers/products");
const { validatorGetItem } = require("../validators/products");

router.get("/", getProductSearch)
router.get("/sellers", getSellers)
router.get("/all", getProducts);
router.get("/:id", validatorGetItem, getProduct);

module.exports = router;
