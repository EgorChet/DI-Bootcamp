import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {},
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      state[date].push(task);
    },
    toggleTask: (state, action) => {
      const { date, taskId } = action.payload;
      const task = state[date].find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      const task = state[date].find((task) => task.id === taskId);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state[date] = state[date].filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, toggleTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
