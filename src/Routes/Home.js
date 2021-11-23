import React, { useState, useEffect } from "react";

import Header from "../Layouts/Header";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import Footer from "../Layouts/Footer";

import { fetchAllTasks, createTask, deleteTask, checkTask } from "../services/serverServices";

const Home = () => {
  const [tasksData, setTasksData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const result = await fetchAllTasks();
    setTasksData(result);
  };

  const addTask = async (task) => {
    const newTask = await createTask(task);
    if (tasksData === undefined) {
      setTasksData([newTask]);
    } else {
      setTasksData([...tasksData, newTask]);
    }
  };

  const delTask = async (id) => {
    await deleteTask(id);
    setTasksData(tasksData.filter((task) => task._id !== id));
  };

  const toggleTask = async (id, value) => {
    const taskStatus = !value;
    await checkTask(id, taskStatus);
    setTasksData(tasksData.map((task) => (task._id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  const editTask = (id) => {
    console.log(id);
    setShowEditTask(true);
  };

  return (
    <div className="home main">
      <Header title="Chainarong" onToggleBtn={() => setShowAddTask(!showAddTask)} isToggled={showAddTask} />
      {showAddTask && <AddTask onAddTask={addTask} />}
      {showEditTask && <AddTask isEditTask={true} />}
      <hr />
      {tasksData && tasksData.length > 0 ? (
        <Tasks tasks={tasksData} onDeleteTask={delTask} onToggleTask={toggleTask} onEditTask={editTask} />
      ) : (
        "Empty Task"
      )}
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
