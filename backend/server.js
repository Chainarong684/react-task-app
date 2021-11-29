const express = require("express");
const dotenv = require("dotenv");
// const cors = require("cors");

const router = require("./routes/routes");
const mongoDB = require("./database/db");

const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

mongoDB.connectDB();

app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "*");
  // res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Option, Authorization");
  next();
});

app.use("/", router);
