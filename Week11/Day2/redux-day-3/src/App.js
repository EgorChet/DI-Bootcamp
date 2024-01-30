import TodoList from "./features/todos/TodoList";
import Users from "./features/users/Users";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <TodoList />
      <Users/>
    </div>
  );
}

export default App;
