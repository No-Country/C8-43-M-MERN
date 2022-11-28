const express = require("express");
const router = express.Router();
const { signUp, confirmEmail, login, sendEmailReset, resetPassword, resetPasswordForm } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");

router.post("/", validatorRegister, signUp)
router.post("/login", validatorLogin, login);
router.get("/confirm/:token", confirmEmail)
router.post("/sendemail", sendEmailReset)
router.get("/resetpassword/:id/:token", resetPassword)
router.post("/resetpassword/:id/:token", resetPasswordForm)

module.exports = router;