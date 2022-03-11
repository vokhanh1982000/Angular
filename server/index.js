const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.h3cuj.mongodb.net/theGioiDiDong?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
        }
      );
      console.log("MongoDB connected");
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  };
  
  connectDB();

app.use(express.json());

app.listen(8800, () => {
    console.log("Backend server is running!");
})