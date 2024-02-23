const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// route
// import UserRoute from "./app/module/user/user.route";
// const userRoute =

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use("/auth", UserRoute);

// Undefined Route Implement
app.use((req, res) => {
  res
    .status(404)
    .json({ status: 404, error: true, message: "Not Found this route" });
});

module.exports = app;
