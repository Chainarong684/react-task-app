const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  detail: String,
  date: { type: Date, default: Date.now },
  reminder: Boolean,
});

const TasksDB = mongoose.model("Tasks", taskSchema);

module.exports = TasksDB;
