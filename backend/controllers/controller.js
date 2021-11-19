let TasksDB = require("../models/TasksModel");

/* ------------------------------ Get all tasks ----------------------------- */
const fetchAllTasks = (req, res) => {
  try {
    TasksDB.find((err, data) => {
      if (err) {
        return res.status(400).json({
          status: "bad",
          err,
        });
      }

      if (data.length === 0) {
        return res.status(200).json({
          statis: "bad",
          msg: "Empty Task",
        });
      } else {
        // const fmDate = data.map((item) => {
        //   return new Date(item.date).toLocaleDateString();
        // });
        return res.status(200).json({
          status: "good",
          data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

/* ------------------------------- Create task ------------------------------ */
const addTasks = (req, res) => {
  const { name, detail, date, reminder } = req.body;
  try {
    TasksDB.create(
      {
        name,
        detail,
        date,
        reminder,
      },
      (err, data) => {
        if (err) {
          return res.status(500).json({
            status: "bad",
            err,
          });
        } else {
          console.log(data);
          return res.status(200).json({
            status: "good",
            data,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchAllTasks, addTasks };
