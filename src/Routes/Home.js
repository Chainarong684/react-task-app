import React, { useState, useEffect } from "react";

import Header from "../Layouts/Header";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import Footer from "../Layouts/Footer";

import { fetchAllTasks, createTask } from "../services/serverServices";

const Home = () => {
  const [tasksData, setTasksData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const result = await fetchAllTasks();
    setTasksData(result);
  };

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasksData([...tasksData, newTask]);
  };

  const deleteTask = (id) => {
    setTasksData(tasksData.filter((task) => task._id !== id));
  };

  const toggleTask = (id) => {
    setTasksData(tasksData.map((task) => (task._id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="home main">
      <Header title="Chainarong" onToggleBtn={() => setShowAddTask(!showAddTask)} isToggled={showAddTask} />
      {showAddTask && <AddTask onAddTask={addTask} />}
      <hr />
      {tasksData ? <Tasks tasks={tasksData} onDeleteTask={deleteTask} onToggleTask={toggleTask} /> : "Empty Task"}
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
