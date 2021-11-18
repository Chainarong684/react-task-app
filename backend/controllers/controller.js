let TasksDB = require("../models/TasksModel");

// get all tasks
const fetchAllTasks = async (req, res) => {
  const data = await TasksDB.find();
  console.log(data);
};

const addTasks = async (req, res) => {
  const { name, detail, date, reminder } = req.body;
  try {
    if (!name || name === "") {
      return res.status(400).send({
        status: "bad",
        msg: "Please input Task name",
      });
    }

    const insertDB = await TasksDB.create({
      name,
      detail,
      date,
      reminder,
    });

    console.log(insertDB);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchAllTasks, addTasks };
