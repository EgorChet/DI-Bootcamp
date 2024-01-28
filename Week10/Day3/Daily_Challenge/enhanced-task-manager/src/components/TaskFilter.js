import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const TaskFilter = () => {
  const { dispatch } = useContext(TasksContext);

  const setFilter = (filterType) => {
    dispatch({ type: "FILTER_TASKS", payload: filterType });
  };

  return (
    <div>
      <button onClick={() => setFilter("ALL")}>All</button>
      <button onClick={() => setFilter("COMPLETED")}>Completed</button>
      <button onClick={() => setFilter("ACTIVE")}>Active</button>
    </div>
  );
};

export default TaskFilter;
