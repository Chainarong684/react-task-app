import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { CalendarOutlined } from "@ant-design/icons";

const Task = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <div className={`task-box ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggleTask(task.id)}>
      <div className="task-data">
        <h3>{task.text}</h3>
        <p>
          <CalendarOutlined /> {task.day}
        </p>
      </div>
      <div className="task-btn">
        <FaEdit style={editStyle} />
        <FaTimes style={timeStyle} onClick={() => onDeleteTask(task.id)} />
      </div>
    </div>
  );
};

const editStyle = {
  cursor: "pointer",
  fontSize: "20",
};

const timeStyle = {
  color: "red",
  cursor: "pointer",
  fontSize: "20",
};

export default Task;
