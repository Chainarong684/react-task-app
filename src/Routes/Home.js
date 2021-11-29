import React, { useState, useEffect } from "react";

import Header from "../Layouts/Header";
import FormTask from "../components/FormTask";
import Tasks from "../components/Tasks";
import Footer from "../Layouts/Footer";

import { fetchAllTasks, createTask, deleteTask, checkTask, updateTask } from "../services/serverServices";

const Home = () => {
  const [tasksData, setTasksData] = useState([]);
  const [task, setTask] = useState("");
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);

  useEffect(() => {
    getTasks();
  }, [tasksData]);

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
    setShowAddTask(false);
  };

  const delTask = async (id) => {
    await deleteTask(id);
    // setTasksData(tasksData.filter((task) => task._id !== id));
  };

  const toggleTask = (id, value) => {
    const taskStatus = !value;
    checkTask(id, taskStatus);
    // setTasksData(tasksData.map((task) => (task._id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  const onUpdateTask = (editTask) => {
    updateTask(editTask);
    setShowEditTask(false);
  };

  const editTask = (id) => {
    if (showEditTask) {
      setShowEditTask(false);
    } else {
      setShowEditTask(true);
    }
    setTask(tasksData.filter((task) => task._id === id));
  };

  return (
    <div className="home main">
      <Header title="Tasks List" onToggleBtn={() => setShowAddTask(!showAddTask)} isToggled={showAddTask} />
      {showAddTask && <FormTask mode="Add Task" onAddTask={addTask} />}
      {showEditTask && (
        <FormTask
          mode="Edit Task"
          onUpdateTask={onUpdateTask}
          task={task}
          handleCancelBtn={() => setShowEditTask(false)}
        />
      )}
      <hr />
      {tasksData && tasksData.length > 0 ? (
        <Tasks tasks={tasksData} onDeleteTask={delTask} task={task} onToggleTask={toggleTask} onEditTask={editTask} />
      ) : (
        "Empty Task"
      )}
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
