const { handleHttpError } = require("../utils/handleError");
const { getTokenData } = require("../config/jwt");

const authMiddleware = async (req, res, next) => {
  try {
    //!VERIFICO QUE EL TOKEN EXISTA EN LOS HEADERS
    if (!req.headers.authorization) {
      handleHttpError(res, "NOT_TOKEN", 401);
      return;
    }

    //!VERIFICO QUE EL TOKEN SEA EL CORRECTO
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await getTokenData(token);

    //!VERIFICO QUE LA ID DENTRO DEL TOKEN SEA LA CORRESPONDIENTE
    if (!dataToken._id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401);
      return;
    }

    next();
  } catch (error) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};

module.exports = { authMiddleware };
