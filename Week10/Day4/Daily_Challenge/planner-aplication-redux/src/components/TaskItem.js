// src/components/TaskItem.js
import "./TaskItem.css";
import { useDispatch } from "react-redux";
import { editTask, deleteTask, toggleTaskCompletion } from "../redux/tasksSlice";

const TaskItem = ({ task, selectedDate }) => {
  const dispatch = useDispatch();
  const formattedDate = selectedDate.toISOString().split("T")[0];

  const handleDelete = () => {
    dispatch(deleteTask({ date: formattedDate, taskId: task.id }));
  };

  const handleCompletionToggle = () => {
    dispatch(toggleTaskCompletion({ date: formattedDate, taskId: task.id }));
  };

  const handleEdit = () => {
    // The edit functionality may need to be expanded to allow changing the text.
    // For now, it just dispatches an action with the existing text.
    dispatch(editTask({ date: formattedDate, taskId: task.id, newText: task.text }));
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.completed}
          onChange={handleCompletionToggle}
        />
        <label
          className={`form-check-label ${task.completed ? "text-decoration-line-through" : ""}`}
          onClick={handleCompletionToggle}
        >
          {task.text}
        </label>
      </div>
      <div className="button-group">
        <button className="btn btn-edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
