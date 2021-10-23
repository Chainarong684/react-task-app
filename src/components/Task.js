import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { CalendarOutlined } from "@ant-design/icons";

const Task = ({ task }) => {
  return (
    <div className="task-box">
      <div className="task-data">
        <h3>{task.text}</h3>
        <p>
          <CalendarOutlined /> {task.day}
        </p>
      </div>
      <div className="task-btn">
        <FaEdit style={editStyle} />
        <FaTimes style={timeStyle} />
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
