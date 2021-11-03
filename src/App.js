import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import "./App.css";

const App = () => {
  const [tasksData, setTasksData] = useState([
    {
      id: 1,
      text: "Coder",
      day: "02/03/2021",
      reminder: true,
    },
    {
      id: 2,
      text: "Reader",
      day: "05/03/2021",
      reminder: true,
    },
    {
      id: 3,
      text: "Workout",
      day: "07/03/2021",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...task };
    setTasksData(...tasksData, newTask);
  };

  const deleteTask = (id) => {
    setTasksData(tasksData.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasksData(tasksData.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="container main">
      <Header title="CK" />
      <AddTask onAddTask={addTask} />
      <hr />
      {tasksData.length > 0 ? <Tasks tasks={tasksData} onDeleteTask={deleteTask} onToggleTask={toggleTask} /> : "Empty"}
    </div>
  );
};

export default App;
