import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: editedText } });
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const toggleCompletion = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input className='form-control' value={editedText} onChange={handleTextChange} />
          <button className='btn btn-success btn-sm' onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <span className={task.completed ? "text-muted text-decoration-line-through" : ""}>
            {task.text}
          </span>
          <button className='btn btn-primary btn-sm' onClick={handleEdit}>
            Edit
          </button>
          <button className='btn btn-secondary btn-sm' onClick={toggleCompletion}>
            {task.completed ? "Uncomplete" : "Complete"}
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
