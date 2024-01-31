import { useSelector } from "react-redux";
import { selectTasksByCategory } from "../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";

const TaskList = ({ categoryId }) => {
  // This will re-run whenever the categoryId changes, or when the tasks state changes.
  const tasks = useSelector((state) => selectTasksByCategory(state, categoryId));

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
