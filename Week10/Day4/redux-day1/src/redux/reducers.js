const initialState = {
  count: 8,
  text: "Hello",
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: state.count + action.payload,
      text: action.text,
    };
  } else if (action.type === DECREMENT)
    return {
      ...state,
      count: state.count - action.payload,
      text: action.text,
    };
  return { ...state };
};
