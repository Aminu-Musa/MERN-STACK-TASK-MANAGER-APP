const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

const runServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

runServer();
