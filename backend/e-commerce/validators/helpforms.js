const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
    check("name").exists().notEmpty().isString(),
    check("lastname").exists().notEmpty().isString(),
    check("email").exists().notEmpty().isEmail(),
    check("issue").exists().notEmpty().isString(),
    check("description").exists().notEmpty().isString(),
    (req, res, next) => {
      return validateResults(req, res, next);
    },
  ];
  
  module.exports = {validatorCreateItem}