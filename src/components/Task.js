import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { CalendarOutlined } from "@ant-design/icons";

const Task = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <div className={`task-box ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggleTask(task._id)}>
      <div className="task-data">
        <h3>{task.name}</h3>
        <p>
          <CalendarOutlined /> {task.date}
        </p>
        {task.detail && (
          <>
            <hr />
            {task.detail}
          </>
        )}
      </div>
      <div className="task-btn">
        <FaEdit style={editStyle} />
        <FaTimes style={timeStyle} onClick={() => onDeleteTask(task._id)} />
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
