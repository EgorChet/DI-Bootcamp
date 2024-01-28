import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "2023-11-23": [{ id: 1, text: "Task 1", completed: false }],
  // other dates can be added here
};

const tasksSlice = createSlice({
  name: "tasksByDay",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      state[date].push({ ...task, id: Date.now() });
    },
    editTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      const task = state[date].find(task => task.id === taskId);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state[date] = state[date].filter(task => task.id !== taskId);
    },
    toggleTaskCompletion: (state, action) => {
      const { date, taskId } = action.payload;
      const task = state[date].find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
