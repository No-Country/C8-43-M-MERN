const express = require("express");
const router = express.Router();

const { pruebaSuccess } = require("../controllers/pruebaSuccess")

router.get("/", pruebaSuccess);

module.exports = router;