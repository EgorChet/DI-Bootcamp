import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector((state) => state.tasks[selectedDate] || []);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} selectedDate={selectedDate} />
      ))}
    </ul>
  );
};

export default TaskList;
