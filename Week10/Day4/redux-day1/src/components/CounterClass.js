import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";


const CounterClass = (props) => {
  return (
    <>
      Count: {props.count} {props.text}
      <button onClick={() => props.setCount(10)}>Increment</button>
      <button onClick={() => props.dec(1)}>Decrement</button>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("storeState", state);
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCount: (val) => dispatch(increment(val, "Increment by " + val)),
    dec: (val) => dispatch(decrement(val, "Decrement by " + val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
