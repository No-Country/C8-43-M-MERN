const express = require("express");
const router = express.Router();
const { userRole } = require("../middlewares/role");
const { authMiddleware } = require("../middlewares/session");
const { validatorGetItem } = require("../validators/shoppingcart");
const {
  getShoppingCart,
  addProductCart,
  modifyAmount,
  deleteProduct,
} = require("../controllers/shoppingcart");

router.get("/:id", userRole, authMiddleware, validatorGetItem, getShoppingCart);
router.post("/:id", userRole, authMiddleware, addProductCart);
router.put("/amount/:id", userRole, authMiddleware, modifyAmount);
router.delete("/:id", userRole, authMiddleware, deleteProduct);

module.exports = router;
