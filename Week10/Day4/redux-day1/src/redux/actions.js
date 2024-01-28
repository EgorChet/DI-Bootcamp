import { INCREMENT, DECREMENT } from "./reducers";

export const increment = (val, text) => {
  return {
    type: INCREMENT,
    payload: val,
    text,
  };
};

export const decrement = (val, text) => {
  return {
    type: DECREMENT,
    payload: val,
    text,
  };
};
