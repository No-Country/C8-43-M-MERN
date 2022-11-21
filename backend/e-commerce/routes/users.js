const express = require("express");
const router = express.Router();
const { signUp, confirmEmail, login } = require("../controllers/users");
const { validatorRegister, validatorLogin } = require("../validators/users");

router.post("/", validatorRegister, signUp)
router.post("/login", validatorLogin, login);
router.get("/confirm/:token", confirmEmail)

module.exports = router;