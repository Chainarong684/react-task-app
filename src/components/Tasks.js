import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />
      ))}
    </>
  );
};

export default Tasks;
