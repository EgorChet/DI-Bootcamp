import React from "react";
import { TasksProvider } from "./context/TasksContext";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import AddTask from "./components/AddTask";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <TasksProvider>
      <div className='App'>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskFilter />
        <TaskList />
      </div>
    </TasksProvider>
  );
}

export default App;
