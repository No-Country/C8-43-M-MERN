const express = require("express");
const router = express.Router();
const {getProducts} = require("../controllers/products");

router.post("/", getProducts);

module.exports = router;
