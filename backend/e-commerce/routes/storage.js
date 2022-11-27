const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { updatePerfilImage, deletePerfilImage } = require("../controllers/storage");
const { authMiddleware } = require("../middlewares/session");
const { validatorGetItem } = require("../validators/storage");

router.put("/", uploadMiddleware.single("image"), authMiddleware, updatePerfilImage);
router.delete("/:id", authMiddleware, validatorGetItem, deletePerfilImage);

module.exports = router;
