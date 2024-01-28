import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { TasksContext } from "../context/TasksContext";

const TaskList = () => {
  const { state } = useContext(TasksContext);
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    if (filter === "COMPLETED") return task.completed;
    if (filter === "ACTIVE") return !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
