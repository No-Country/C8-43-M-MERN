const { handleHttpError } = require("../utils/handleError");
const { getTokenData } = require("../config/jwt");
const { usersModel, sellersModel } = require("../models");

const userRole = async (req, res, next) => {
  try {
    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!VERIFICO ROLE
    if (dataToken.role.toString() !== "user") {
      handleHttpError(res, "SELLER_NOT_PERMISSIONS", 403);
      return;
    }else{
      next();
    }
  } catch (error) {
    handleHttpError(res, "ERROR_USER_PERMISSIONS", 403);
  }
};

const sellerRole = async (req, res, next) => {
  try {
    //!DECODIFICO TOKEN
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!VERIFICO ROLE
    if (dataToken.role.toString() !== "seller") {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }else{
      next();
    }

  } catch (error) {
    handleHttpError(res, "ERROR_SELLER_PERMISSIONS", 403);
  }
};

module.exports = { userRole, sellerRole };
