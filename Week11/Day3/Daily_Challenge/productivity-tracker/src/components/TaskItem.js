import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { editTask, updateTaskProgress } from "../features/tasks/tasksSlice";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newTask: { ...task, title } }));
    setIsEditing(false);
  };

  const handleComplete = useCallback(() => {
    dispatch(updateTaskProgress({ id: task.id, progress: !task.isCompleted }));
  }, [dispatch, task.id, task.isCompleted]);

  return (
    <div>
      {isEditing ? (
        <>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleComplete}>{task.isCompleted ? "Unmark" : "Complete"}</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
