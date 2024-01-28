const Counter = (props) => {
  return (
    <>
      <button onClick={() => props.setCount(props.count + 1)}>+</button>
      Count: {props.count}
      <button onClick={() => props.setCount(props.count - 1)}>-</button>
    </>
  );
};

export default Counter;
