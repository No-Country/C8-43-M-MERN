const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { updateImage, deleteImage } = require("../controllers/storage");
const { authMiddleware } = require("../middlewares/session");
const { validatorGetItem } = require("../validators/storage");

router.put("/", uploadMiddleware.single("file"), authMiddleware, updateImage);
router.delete("/:id", authMiddleware, validatorGetItem, deleteImage);

module.exports = router;
