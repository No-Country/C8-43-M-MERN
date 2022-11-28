const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
      openapi: "3.0.0", 
      info: {
        title: "ecommerce", 
        version: "1.0.0",
        description: "api for no country"
      }, 
      servers: [
        {
          url: `http://localhost:${process.env.PORT}`
        }
      ], 
    }, 
    apis: ["./routes/*.js"],
};
  
const specs = swaggerJsDoc(options);

module.exports = specs;