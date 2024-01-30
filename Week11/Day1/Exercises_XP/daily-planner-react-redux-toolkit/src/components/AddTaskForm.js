import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./AddTaskForm.css"

const AddTaskForm = ({ selectedDate }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const formattedDate = selectedDate.toISOString().split("T")[0];
    dispatch(addTask({ date: formattedDate, task: { id: nanoid(), text, completed: false } }));
    setText("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form onSubmit={handleSubmit} className='my-4'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control google-style-input'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Enter a new task'
            />
            <button className='btn btn-outline-primary btn-margin-left' type='submit'>
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;

