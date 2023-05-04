const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  wheels: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("vehicleSchema", vehicleSchema);
