const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// GET latest booking
router.get("/", async (req, res) => {
  try {
    const booking = await Booking.findOne().sort({ _id: -1 });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST booking data
router.post("/", async (req, res) => {
  const { checkIn, checkOut, guests } = req.body;

  try {
    const newBooking = new Booking({ checkIn, checkOut, guests });
    await newBooking.save();
    res.status(201).json({ message: "Booking saved" });
  } catch (err) {
    res.status(500).json({ message: "Failed to save booking" });
  }
});

module.exports = router;
