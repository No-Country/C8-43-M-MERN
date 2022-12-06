const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorCreateItem = [
  check("name").exists().notEmpty().isString(),
  check("color").exists().notEmpty(),
  check("category").exists().notEmpty(),
  check("sizes").exists().notEmpty().isArray(),
  check("price").exists().notEmpty().isNumeric(),
  check("description").exists().notEmpty().isString(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = {validatorGetItem, validatorCreateItem}
