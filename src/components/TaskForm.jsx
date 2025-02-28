import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription) {
      alert("Please fill in both task name and description.");
      return;
    }

    const task = {
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    if (taskToEdit) {
      editTask(taskToEdit.id, task);
      setTaskToEdit(null);
    } else {
      addTask(task);
    }

    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">{taskToEdit ? "Edit Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
