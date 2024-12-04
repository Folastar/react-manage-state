import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleCompletion, deleteTask, startEditing }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
          startEditing={startEditing}
        />
      ))}
    </div>
  );
};

export default TaskList;
