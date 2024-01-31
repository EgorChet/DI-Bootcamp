import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

const AddTaskForm = ({ categoryId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the title is empty
    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    // Check if a category has been selected
    if (!categoryId) {
      alert("Please select a category first.");
      return;
    }

    // Dispatch the addTask action with the new task details
    dispatch(addTask({
      id: Date.now(),
      title,
      categoryId,
      isCompleted: false
    }));
    setTitle(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
