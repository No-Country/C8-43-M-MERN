const express = require("express");
const router = express.Router();
const { signUp, confirmEmail, login } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");

router.post("/", validatorRegister, signUp)
router.post("/login", validatorLogin, login);
router.get("/confirm/:token", confirmEmail)

module.exports = router;