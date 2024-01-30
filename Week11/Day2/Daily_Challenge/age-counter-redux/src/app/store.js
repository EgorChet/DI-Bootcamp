import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "../features/agecounter/ageSlice";

export const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;
