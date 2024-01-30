import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, removeTask,addThunkTask,addAsyncTask } from "./todosSlice";
import { useState } from "react";

const TodoList = (props) => {
  const [text, setText] = useState();
  const tasks = useSelector((state) => state.todos);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log('TodoList=>', users);
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          placeholder='Add task'
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => dispatch(addTask({ text }))}>Add Task</button>
        <button onClick={() => dispatch(addThunkTask( text ))}>Add Delay Task</button>
        <button onClick={() => dispatch(addAsyncTask( text ))}>Add Async Task</button>
      </div>
      <div>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <span
                style={{ textDecoration: task.completed ? "line-through" : "" }}
              >
                {task.text}
              </span>
              <button onClick={() => dispatch(removeTask(task.id))}> - </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
