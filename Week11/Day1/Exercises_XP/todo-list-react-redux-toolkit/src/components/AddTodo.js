// src/components/AddTodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import "./AddTodo.css"; // Import the CSS file

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo({ id: Date.now(), text, completed: false }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className='add-todo-form'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter todo...'
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default AddTodo;
