const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost/vehicle_rental", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
