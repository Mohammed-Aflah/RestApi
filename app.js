const express = require("express");
const app = express();
const router = require("./routes/router");
const bodyParser = require("body-parser");
const cors=require('cors')
require("dotenv").config();

app.use(cors())
app.use(bodyParser.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Started on :  http://localhost:${PORT}`)
);
