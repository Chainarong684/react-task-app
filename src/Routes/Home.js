import React, { useState } from "react";

import Header from "../Layouts/Header";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import Footer from "../Layouts/Footer";

const Home = () => {
  let sampleData = [
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
  ];
  const [tasksData, setTasksData] = useState(sampleData);
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    setTasksData([...tasksData, task]);
  };

  const deleteTask = (id) => {
    setTasksData(tasksData.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasksData(tasksData.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="home main">
      <Header title="Chainarong" onToggleBtn={() => setShowAddTask(!showAddTask)} isToggled={showAddTask} />
      {showAddTask && <AddTask onAddTask={addTask} />}
      <hr />
      {tasksData.length > 0 ? <Tasks tasks={tasksData} onDeleteTask={deleteTask} onToggleTask={toggleTask} /> : "Empty"}
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
