const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { getSeller, createProduct, updateProduct, updatePerfilSeller, updateProductImage, deleteProduct } = require("../controllers/seller");
const { validatorGetSeller } = require("../validators/sellers");
const { validatorGetItem, validatorCreateItem } = require("../validators/products");
const { authMiddleware } = require("../middlewares/session");
const { sellerRole } = require("../middlewares/role")

router.get("/:id", validatorGetSeller, getSeller)
router.put("/:id", authMiddleware, validatorGetSeller, updatePerfilSeller)
router.post("/create", sellerRole, authMiddleware, uploadMiddleware.single("image"), validatorCreateItem, createProduct)
router.put("/product/update/:id", sellerRole, authMiddleware, updateProduct)
router.put("/product/update/image/:id", sellerRole, authMiddleware, uploadMiddleware.single("image"), validatorGetItem, updateProductImage);
router.delete("/product/:id", sellerRole, authMiddleware, validatorGetItem, deleteProduct)

module.exports = router;