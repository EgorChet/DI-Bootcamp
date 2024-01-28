// src/components/TaskList.js
import "./TaskList.css";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = ({ selectedDate }) => {
  const formattedDate = selectedDate.toISOString().split("T")[0];
  const tasks = useSelector((state) => state.tasksByDay[formattedDate] || []);

  return (
    <ul className='list-group mt-3'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} selectedDate={selectedDate} />
      ))}
    </ul>
  );
};

export default TaskList;
