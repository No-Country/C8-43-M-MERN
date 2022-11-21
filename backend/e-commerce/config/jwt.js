const jwt = require("jsonwebtoken");
const SECRET_WORD = process.env.SECRET_WORD;


const getToken = async (user) => {
  const sign = await jwt.sign(
    {
      //!TOKENIZO ESTAS 2 PROPIEDADES
      _id: user._id,
      email: user.email,
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
      console.log("Error al obtener informacion del token");
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
