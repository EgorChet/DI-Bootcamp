import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import AddTaskForm from "./components/AddTaskForm";
import CalendarPicker from "./components/CalendarPicker";
import TaskList from "./components/TaskList";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Provider store={store}>
      <div className='App'>
        <CalendarPicker onSelectDate={setSelectedDate} />
        <AddTaskForm selectedDate={selectedDate} />
        <TaskList selectedDate={selectedDate.toISOString().split("T")[0]} />
      </div>
    </Provider>
  );
};

export default App;
