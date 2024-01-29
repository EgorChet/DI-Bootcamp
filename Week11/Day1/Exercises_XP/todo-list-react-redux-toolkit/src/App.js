import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To Do List</h1>
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
