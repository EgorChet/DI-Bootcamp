import React, { useState } from "react";

import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css"; // Import your custom CSS here

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='container my-4'>
      <h1 className='text-center mb-4'>Task Manager</h1>
      <div className='row'>
        <div className='col-md-10 mx-auto'>
          {/* Component to add new tasks */}
          <AddTaskForm selectedDate={selectedDate} />

          {/* Component to display tasks */}
          <TaskList selectedDate={selectedDate.toISOString().split("T")[0]} />
        </div>
      </div>
    </div>
  );
}

export default App;
