const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Successfully MongoDB Database connected on ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error Database Connection Failed ${error}`);
  }
};

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open to " + process.env.MONGO_URI);
});

// If the connection throws an error
mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

module.exports = { connectDB };
