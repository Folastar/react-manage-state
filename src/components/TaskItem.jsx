import React from "react";

const TaskItem = ({ task, toggleCompletion, deleteTask, startEditing }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3 onClick={() => startEditing(task)}>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => toggleCompletion(task.id)}>
        {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
