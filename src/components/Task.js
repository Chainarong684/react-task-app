const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.text}</h3>
      <h3>{task.day}</h3>
    </div>
  );
};

export default Task;
