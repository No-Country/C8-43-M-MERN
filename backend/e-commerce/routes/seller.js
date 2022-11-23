const express = require("express");
const router = express.Router();
const { createProduct, updateProduct, deleteProduct } = require("../controllers/seller");
const { validatorGetItem, validatorCreateItem } = require("../validators/products");
const { authMiddleware } = require("../middlewares/session");

router.post("/create", authMiddleware, validatorCreateItem, createProduct)
router.put("/product/update/:id", authMiddleware, updateProduct)
router.delete("/product/:id", authMiddleware, validatorGetItem, deleteProduct)

module.exports = router;