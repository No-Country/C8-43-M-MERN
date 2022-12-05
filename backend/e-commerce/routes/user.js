const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/session");
const { userRole } = require("../middlewares/role");
const {
  addFavorite,
  getFavorites,
  getFavorite,
  deleteFavorite,
  followSeller,
  unFollow,
  getFollower,
  getFollowers
} = require("../controllers/user");

router.put("/favorites/:id", authMiddleware, userRole, addFavorite);
router.get("/favorites", authMiddleware, userRole, getFavorites);
router.get("/favorite/:id", authMiddleware, userRole, getFavorite);
router.delete("/favorite/:id", authMiddleware, userRole, deleteFavorite);

router.put("/follow/:id", authMiddleware, userRole, followSeller);
router.delete("/follow/:id", authMiddleware, userRole, unFollow);
router.get("/follow/:id", authMiddleware, userRole, getFollower);
router.get("/followed", authMiddleware, userRole, getFollowers);
module.exports = router;
