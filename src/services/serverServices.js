import axios from "axios";

// get all tasks
export const fetchAllTasks = async () => {
  try {
    const Tasks = await axios.get("http://localhost:3001/api/v1/tasks");
    const { data } = Tasks.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// create new task
export const createTask = async (value) => {
  try {
    const insertTask = await axios.post("http://localhost:3001/api/v1/tasks", value);
    const { data } = insertTask.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// update task
export const updateTask = async (value) => {
  const { _id } = value;
  await axios.put(`http://localhost:3001/api/v1/tasks/${_id}`, value);
  try {
  } catch (error) {
    console.log(error);
  }
};

// delete task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/api/v1/tasks/${id}`);
  } catch (error) {
    console.log(error);
  }
};

// toggle task
export const checkTask = async (id, value) => {
  try {
    await axios.put(`http://localhost:3001/api/v1/tasks/${id}`, { reminder: value });
  } catch (error) {
    console.log(error);
  }
};
