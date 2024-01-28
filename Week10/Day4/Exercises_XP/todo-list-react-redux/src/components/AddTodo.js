// src/components/AddTodo.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
