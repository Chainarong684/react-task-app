let TasksDB = require("../models/TasksModel");

/* ------------------------------ Get all tasks ----------------------------- */
const getTasks = (req, res) => {
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
          status: "bad",
          msg: "Empty Task",
        });
      } else {
        // data.map((item) => {
        //   const fmDate = new Date(item.date).toLocaleDateString();
        //   return fmDate
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
  try {
    const { name, detail, date, reminder } = req.body;
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
/* ------------------------------- Update Task ------------------------------ */
const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);

    TasksDB.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          status: "bad",
          err,
        });
      } else {
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

/* ------------------------------- Delete task ------------------------------ */
const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    TasksDB.findByIdAndDelete(id, (err, data) => {
      if (err) {
        return res.status(400).json({
          status: "bad",
          err,
        });
      } else {
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

module.exports = { getTasks, addTasks, updateTask, deleteTask };
