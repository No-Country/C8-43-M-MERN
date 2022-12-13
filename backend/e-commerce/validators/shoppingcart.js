const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorCreateItem = [
  check("order.name").exists().notEmpty().isString(),
  check("order.color").exists().notEmpty(),
  check("order.sizes").exists().notEmpty().isArray(),
  check("order.price").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = {validatorGetItem, validatorCreateItem}