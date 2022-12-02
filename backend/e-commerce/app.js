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
  res.header("Access-Control-Allow-Origin", "https://c8-43-m-mern-api.vercel.app"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`**CONECTADO AL SERVIDOR, EN EL PUERTO: ${port}**`);
});

dbConnect()
