import React, { useState, useEffect } from "react";

import Header from "../Layouts/Header";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import Footer from "../Layouts/Footer";

import axios from "axios";
import { Result } from "antd";

const Home = () => {
  // let sampleData = [
  //   {
  //     id: 1,
  //     text: "Coder",
  //     day: "02/03/2021",
  //     detail:
  //       "Rerum quam non nulla dolorum eos reprehenderit amet eveniet. Sunt ut rerum qui ipsum praesentium. In quis distinctio hic dolores iure.",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Reader",
  //     day: "05/03/2021",
  //     detail: `Voluptatem a eos sed eligendi itaque tempore enim et eos. Nulla reprehenderit omnis placeat veniam quos omnis aspernatur nulla ab. Omnis a culpa velit ducimus.
  //             Optio omnis voluptas soluta magni tenetur in. Qui nesciunt nostrum facilis velit odio explicabo distinctio eligendi. Molestiae fuga omnis.
  //             Voluptas laborum sed in quisquam. Mollitia temporibus itaque provident ut omnis tenetur sint consequatur. Mollitia magni excepturi reiciendis reiciendis ut. Aut quo nemo et. Aperiam voluptatem mollitia. Perferendis et repellat sed pariatur non maiores reiciendis ut.`,
  //     reminder: true,
  //   },
  //   {
  //     id: 3,
  //     text: "Workout",
  //     day: "07/03/2021",
  //     detail:
  //       "Sint qui unde tempora id iure. Non optio incidunt quo. Qui necessitatibus eos est animi assumenda corporis aut illo ipsa.",
  //     reminder: false,
  //   },
  // ];
  const [tasksData, setTasksData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = () => {
    axios
      .get("http://localhost:3001/api/v1/tasks")
      .then((result) => {
        const { data } = result.data
        setTasksData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTask = (task) => {
    setTasksData([...tasksData, task]);
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
      {tasksData.length > 0 ? (
        <Tasks tasks={tasksData} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
      ) : (
        "Empty Task"
      )}
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
