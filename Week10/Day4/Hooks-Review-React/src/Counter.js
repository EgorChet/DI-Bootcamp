import Increment from "./Increment";

const Counter = (props) => {
  return (
    <>
      <>Count: {props.count}</>
      {/* <Increment>{props.setCount}</Increment> */}
      <Increment setCount={props.setCount} count={props.count} />
    </>
  );
};

export default Counter;
