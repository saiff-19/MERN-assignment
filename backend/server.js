const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/booking", bookingRoutes);
mongoose
  .connect("mongodb://127.0.0.1:27017/airbnb-booking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen("5000", () => {
      console.log(`Server running on port ${5000}`);
    });
  })
  .catch((err) => console.log(err));
