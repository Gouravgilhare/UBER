// app.js
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./db/db"); // No `.js` needed here
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes =   require('./routes/map.routes')
dotenv.config();

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", userRoutes);
app.use("/captain", captainRoutes);
app.use("/maps", mapRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Backend API");
});

module.exports = app;
