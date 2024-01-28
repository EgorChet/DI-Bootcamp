// src/components/TodoItem.js
import './TodoItem.css'
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
    </div>
  );
};


const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
