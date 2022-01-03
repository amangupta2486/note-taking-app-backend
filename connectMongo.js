const mongoose = require("mongoose");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const connectToDatabase = () => {
  // Connects to the MongoDB database

  const mongoURI = process.env.MONGO_URI;

  mongoose.connect(mongoURI, () => {
    console.log("Connected to the database");
  });
};

module.exports = connectToDatabase;
