const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./db/dbConnect')
const vehicleRouter = require("./routers/vehicleRouter");

db
  .then((x) => console.log("connection establish!!"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/vehicle", vehicleRouter);

module.exports = app;
