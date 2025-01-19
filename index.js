const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://growth-gold.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);
mongoose
  .connect(
    "mongodb+srv://rvengeholder786:7oKU94I6ZZWWaocB@cluster0.nytpx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("Erro occured");
  });

app.listen("8000", () => {
  console.log("server is running");
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/authRoute"));
