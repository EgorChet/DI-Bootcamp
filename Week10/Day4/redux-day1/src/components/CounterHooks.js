import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";

const CounterHooks = (props) => {
  const { count, text } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        Count: {count} <p>{text}</p>
      </div>
      <button onClick={() => dispatch({ type: "INCREMENT", text: "Increment by 1", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch(decrement(1, "Decrement by 1"))}>-</button>
    </>
  );
};

export default CounterHooks;
