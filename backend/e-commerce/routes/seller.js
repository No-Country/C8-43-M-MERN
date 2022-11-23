const express = require("express");
const router = express.Router();
const { createProduct, updateProduct, deleteProduct } = require("../controllers/seller");
const { validatorGetItem, validatorCreateItem } = require("../validators/products");
const { authMiddleware } = require("../middlewares/session");
const { userRole, sellerRole } = require("../middlewares/role")

router.post("/create", sellerRole, authMiddleware, validatorCreateItem, createProduct)
router.put("/product/update/:id", sellerRole, authMiddleware, updateProduct)
router.delete("/product/:id", sellerRole, authMiddleware, validatorGetItem, deleteProduct)

module.exports = router;