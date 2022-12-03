const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/helpforms");
const { sendQuestion } = require("../controllers/helpforms");

router.post("/", validatorCreateItem, sendQuestion)

module.exports = router;