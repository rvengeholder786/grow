const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://growth-gold.vercel.app", // Allow only the specific frontend
  credentials: true, // Allow credentials like cookies, authorization headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware to parse cookies and handle JSON and URL-encoded data
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Connect to the database
mongoose
  .connect(
    "mongodb+srv://rvengeholder786:7oKU94I6ZZWWaocB@cluster0.nytpx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Error occurred while connecting to the database");
  });

// Define routes
app.use("/", require("./routes/authRoute"));

// Handle preflight requests (CORS preflight for HTTP methods like OPTIONS)
app.options('*', cors(corsOptions));

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
