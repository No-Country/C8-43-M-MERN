const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/session");
const { userRole } = require("../middlewares/role");
const {
  addFavorite,
  getFavorites,
  getFavorite,
  deleteFavorite,
} = require("../controllers/user");

router.put("/favorites/:id", authMiddleware, userRole, addFavorite);
router.get("/favorites", authMiddleware, userRole, getFavorites);
router.get("/favorite/:id", authMiddleware, userRole, getFavorite);
router.delete("/favorite/:id", authMiddleware, userRole, deleteFavorite);

module.exports = router;
