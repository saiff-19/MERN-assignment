const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  guests: { type: String, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
