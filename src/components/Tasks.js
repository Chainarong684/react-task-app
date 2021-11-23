import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask, onToggleTask, onEditTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} onEditTask={onEditTask} />
      ))}
    </>
  );
};

export default Tasks;
