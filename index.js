const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://growth-gold.vercel.app",  // Only allow this specific frontend URL
  credentials: true,  // Allow cookies and authentication headers
  allowedHeaders: "Content-Type,Authorization",  // Allow specific headers in the request
  methods: "GET,POST,PUT,DELETE,OPTIONS",  // Allow specific HTTP methods
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Middleware to parse cookies and handle JSON and URL-encoded data
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Handle preflight requests (CORS preflight for HTTP methods like OPTIONS)
app.options("*", cors(corsOptions));  // Make sure preflight OPTIONS is handled

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Templo:emrWdQFye0BCEOKa@cluster0.t3rcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Error occurred while connecting to the database");
  });

// Define routes
app.use("/", require("./routes/authRoute"));

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
