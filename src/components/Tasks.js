import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask, onToggleTask, editTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} editTask={editTask} />
      ))}
    </>
  );
};

export default Tasks;
