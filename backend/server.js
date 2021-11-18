const express = require("express");
const dotenv = require("dotenv");

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

mongoDB.connectDB();

app.use("/", router);
