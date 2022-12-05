const pruebaSuccess = async (req, res) => {
    try {
      res.send("<h1>¡REDIRECCIONAMIENTO EXITOSO!</h1>");
    } catch (error) {
      console.log("SUCCESS: ", error);
    }
  };
  
  module.exports = {
    pruebaSuccess
  };