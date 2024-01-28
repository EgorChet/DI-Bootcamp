const Increment = (props) => {
  return (
    <button
      onClick={() => {
        {
          props.setCount(props.count + 1);
        }
      }}
    >
      +
    </button>
  );
};

export default Increment;
