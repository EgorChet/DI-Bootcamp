import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 22,
  },
  reducers: {
    // counter/increment
    increment: (state) => {
      state.count++;
    },
    // counter/decrement
    decrement: (state) => {
      state.count--;
    },
    clear: (state) => {
      state.count = 0;
    },
    incrementByNumber: (state, action) => {
      state.count += action.payload.num1 + action.payload.num2;
    },
    incrementByInput: (state, action) => {
      state.count += action.payload;
    },
    incrementWithPrepare: {
      reducer(state, action) {
        state.count += action.payload.a + action.payload.b;
      },
      prepare(num1, num2) {
        return { payload: { a: num1, b: num2 } };
      },
    },
  },
});

export const { increment, decrement, clear, incrementByNumber, incrementWithPrepare, incrementByInput } =
  counterSlice.actions;

export default counterSlice.reducer;


