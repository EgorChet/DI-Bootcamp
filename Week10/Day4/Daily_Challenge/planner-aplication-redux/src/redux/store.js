import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

// In src/redux/store.js
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    tasksByDay: tasksReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
