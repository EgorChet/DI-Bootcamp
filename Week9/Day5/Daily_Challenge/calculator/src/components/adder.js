import { useState } from "react";

const SimpleAdder = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    setSum(Number(number1) + Number(number2));
  };

  return (
    <div>
      <input
        type='number'
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder='Enter first number'
      />
      <input
        type='number'
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder='Enter second number'
      />
      <button onClick={handleAddition}>Add Them</button>
      <div>{sum !== null && <p>Sum: {sum}</p>}</div>
    </div>
  );
};

export default SimpleAdder;
