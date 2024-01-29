import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todosSlice";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className='todo-item'>
      <input
        id={`todo-${todo.id}`}
        className='custom-checkbox'
        type='checkbox'
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <label htmlFor={`todo-${todo.id}`} className='checkbox-label'></label>
      <span className='todo-text'>{todo.text}</span>
      <button className='delete-button' onClick={() => dispatch(removeTodo(todo.id))}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
