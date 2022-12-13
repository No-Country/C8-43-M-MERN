require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger")

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

const dbConnect = require("./config/mongo");

app.use(cors());
app.use(express.json()); 
app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin", http://localhost:3001`); //!ATENCION VARIABLE PARA DEPLOY
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, USE, POST, OPTIONS, PUT, DELETE");
  next();
});

const port = process.env.PORT || 3000; //!ATENCION VARIABLE PARA DEPLOY

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`**CONECTADO AL SERVIDOR, EN EL PUERTO: ${port}**`);
});

dbConnect()
