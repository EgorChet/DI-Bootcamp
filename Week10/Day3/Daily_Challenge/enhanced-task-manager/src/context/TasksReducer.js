export const TasksReducer = (state, action) => {
  switch (action.type) {
    // ... other actions
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.newText } : task
      );
    case "FILTER_TASKS":
      // Logic to filter tasks based on action.filter
      break;
    default:
      return state;
  }
};
