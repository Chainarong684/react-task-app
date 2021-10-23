import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div>
      <h3>
        {task.text} <FaTimes style={ timeStyle } />
      </h3>
      <h3>{task.day}</h3>
    </div>
  );
};

const timeStyle = {
  color: "red",
  cursor: "pointer",
};

export default Task;