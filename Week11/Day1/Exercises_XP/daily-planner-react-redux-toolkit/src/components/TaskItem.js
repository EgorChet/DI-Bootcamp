import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, deleteTask, toggleTask } from "../features/tasks/tasksSlice";
import "./TaskItem.css";

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
    <li className='list-group-item'>
      <div className='row'>
        <div className='col-12 col-md-1 d-flex justify-content-center align-items-center'>
          <input
            className='form-check-input'
            type='checkbox'
            checked={task.completed}
            onChange={handleCompletionToggle}
          />
        </div>
        <div className='col-12 col-md-8 d-flex align-items-center'>
          {isEditing ? (
            <input
              type='text'
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className='form-control form-control-sm'
            />
          ) : (
            <span className={`w-100 ${task.completed ? "completed-task" : ""}`}>{task.text}</span>
          )}
        </div>
        <div className='col-12 col-md-3 d-flex justify-content-center align-items-center'>
          {isEditing ? (
            <>
              <button className='btn btn-success btn-sm mx-1' onClick={handleSave}>
                Save
              </button>
              <button className='btn btn-warning btn-sm mx-1' onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className='btn btn-info btn-sm mx-1' onClick={handleEdit}>
                Edit
              </button>
              <button className='btn btn-danger btn-sm mx-1' onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default React.memo(TaskItem, (prevProps, nextProps) => {
  return prevProps.task === nextProps.task && prevProps.selectedDate === nextProps.selectedDate;
});
