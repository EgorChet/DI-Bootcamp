import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  clear,
  incrementByNumber,
  incrementWithPrepare,
  incrementByInput,
} from "./counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // State to track the input value
  const [inputValue, setInputValue] = useState(0);

  // Handle the change event on the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Dispatch the incrementByNumber action with the input value
  const handleIncrementByInputValue = () => {
    // Convert inputValue to a number before dispatching
    dispatch(incrementByInput(Number(inputValue)));
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(clear())}>Clear</button>
      </div>
      <div>
        <div>
          Number: <input value={inputValue} onChange={handleInputChange} type='number' />
          <button onClick={handleIncrementByInputValue}>Increment By Input Value</button>
        </div>
        <button onClick={() => dispatch(incrementByNumber({ num1: 5, num2: 0 }))}>
          Increment By Number (5)
        </button>
        <button onClick={() => dispatch(incrementWithPrepare(10, 10))}>
          Increment With Prepare (20)
        </button>
      </div>
    </>
  );
};

export default Counter;
