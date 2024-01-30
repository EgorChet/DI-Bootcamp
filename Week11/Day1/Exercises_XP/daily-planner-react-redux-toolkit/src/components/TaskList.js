import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import "./TaskList.css"

const TaskList = ({ selectedDate }) => {
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'
  const tasks = useSelector((state) => state.tasks[selectedDate] || []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // for 'all'
  });

  return (
    <div className='container my-4'>
      <div className='text-center mb-3'>
        <button className='btn btn-primary mx-1' onClick={() => setFilter("all")}>
          All
        </button>
        <button className='btn btn-secondary mx-1' onClick={() => setFilter("active")}>
          Active
        </button>
        <button className='btn btn-success mx-1' onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>
      <ul className='list-group'>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} selectedDate={selectedDate} />
          ))
        ) : (
          <p className='text-center'>No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
