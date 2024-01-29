import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, deleteTask, toggleTask } from "../features/tasks/tasksSlice";

const TaskItem = ({ task, selectedDate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const dispatch = useDispatch();

  const handleCompletionToggle = () => {
    dispatch(toggleTask({ date: selectedDate, taskId: task.id }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ date: selectedDate, taskId: task.id, newText: editText }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask({ date: selectedDate, taskId: task.id }));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  return (
    <li>
      <div className='task-item'>
        <input type='checkbox' checked={task.completed} onChange={handleCompletionToggle} />
        {isEditing ? (
          <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)} />
        ) : (
          <span className={task.completed ? "completed" : ""}>{task.text}</span>
        )}
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
