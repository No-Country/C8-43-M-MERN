const { validationResult } = require("express-validator");

//!CONFIGURACION VALIDADOR

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

module.exports = validateResults
