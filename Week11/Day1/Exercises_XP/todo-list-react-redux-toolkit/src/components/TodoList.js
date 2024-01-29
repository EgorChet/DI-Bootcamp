// src/components/TodoList.js
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <div>
          <TodoItem key={todo.id} todo={todo} />
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
