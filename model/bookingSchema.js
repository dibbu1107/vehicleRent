const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  vehicleId: {
    type: String,
    required: true,
  },
  userFirstName: {
    type: String,
    required: true,
  },
  userLastName: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("bookingSchema", bookingSchema);
