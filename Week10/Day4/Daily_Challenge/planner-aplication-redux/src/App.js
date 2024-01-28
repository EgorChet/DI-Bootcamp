// src/App.js
import React, { useState } from "react";
import CalendarPicker from "./components/CalendarPicker";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Provider store={store}>
      <div className='container'>
        <h1>Daily Planner</h1>
        <CalendarPicker onSelectDate={setSelectedDate} />
        <AddTaskForm selectedDate={selectedDate} />
        <TaskList selectedDate={selectedDate} />
      </div>
    </Provider>
  );
};

export default App;
