import React, { useContext, useState } from 'react';
import { TasksContext } from '../context/TasksContext';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
