import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import "./AddTaskForm.css";

const AddTaskForm = ({ selectedDate }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const formattedDate = selectedDate.toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask({ date: formattedDate, task: { text } }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className='mt-3 text-center'>
      <input
        style={{ marginTop: 20 }}
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Enter a new task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        {/* Center the button */}
        <button type='submit' className='btn btn-primary mb-2'>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
