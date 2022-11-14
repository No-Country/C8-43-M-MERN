require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./config/mongo");

app.use(cors());
app.use(express.json()); 

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`**CONECTADO AL SERVIDOR, EN EL PUERTO: ${port}**`);
});

dbConnect()
