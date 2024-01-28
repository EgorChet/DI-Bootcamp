import React, { createContext, useReducer } from "react";

export const TasksContext = createContext();

const initialState = {
  tasks: [],
  filter: "ALL",
  nextId: 1, // New field to keep track of the next task ID
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = { id: state.nextId, text: action.payload, completed: false };
      return { ...state, tasks: [...state.tasks, newTask], nextId: state.nextId + 1 };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        ),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case "FILTER_TASKS":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>;
};
