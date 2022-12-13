const express = require("express");
const router = express.Router();
const { generateItem, notifyUrl } = require("../controllers/checkoutgateway");
const { authMiddleware } = require("../middlewares/session");
const { userRole } = require("../middlewares/role");

router.get("/generate/:id",  generateItem);
router.post("/notificar/:id",  notifyUrl);

module.exports = router;
