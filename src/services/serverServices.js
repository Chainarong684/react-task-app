import axios from "axios";

export const fetchAllTasks = async () => {
  try {
    const getTasks = await axios.get("http://localhost:3001/api/v1/tasks");
    const { data } = getTasks.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (value) => {
  try {
    const insertTask = await axios.post("http://localhost:3001/api/v1/tasks", value);
    const { data } = insertTask.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
