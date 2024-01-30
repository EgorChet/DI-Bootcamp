import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todos/todosSlice";
import usersReducer from "../features/users/usersSlice";

import { addTask, addPosts } from "../features/todos/todosSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: usersReducer,
  },
});

// const thunkExample = (dispatch, getState) => {
//   const stateBefore = getState();
//   console.log("prev state => ", stateBefore);

//   setTimeout(() => {
//     dispatch(addTask({ text: "thunk example" }));
//   }, 5000);

//   console.log("current state => ", getState());
// };

// store.dispatch(thunkExample)

// const addThunkTask = () => {
//   return (dispatch, getState) => {
//     const stateBefore = getState();
//     console.log("prev state => ", stateBefore);

//     // setTimeout(() => {
//     //   dispatch(addTask({ text }));
//     // }, 5000);
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         data.forEach((element) => {
//             dispatch(addTask({text:element.title}));
//         });
//       });
//     console.log("current state => ", getState());
//   };
// };

// store.dispatch(addThunkTask());

export default store;
