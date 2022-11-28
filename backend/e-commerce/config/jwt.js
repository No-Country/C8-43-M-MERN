const jwt = require("jsonwebtoken");
const SECRET_WORD = process.env.SECRET_WORD;
const { handleHttpError } = require("../utils/handleError");

const getToken = async (user) => {
  const sign = await jwt.sign(
    {
      //!TOKENIZO ESTAS 3 PROPIEDADES
      _id: user._id,
      email: user.email,
      role: user.role
    },
    SECRET_WORD,
    { expiresIn: "2h" }
  );
  return sign;
};



const getTokenData = (token) => {
  let data = null;
  jwt.verify(token, SECRET_WORD, (err, decoded) => {
    if (err) {
      throw new Error("ERROR_TO_VERIFY_TOKEN");
    } else {
      data = decoded;
    }
  });
  return data;
};



module.exports = {
  getToken,
  getTokenData,
};
