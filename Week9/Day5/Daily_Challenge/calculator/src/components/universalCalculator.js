import React, { useState } from "react";

const UniversalCalculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("add");

  const handleCalculation = () => {
    const num1 = Number(number1);
    const num2 = Number(number2);

    switch (operation) {
      case "add":
        setResult(num1 + num2);
        break;
      case "subtract":
        setResult(num1 - num2);
        break;
      case "multiply":
        setResult(num1 * num2);
        break;
      case "divide":
        if (num2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult(null);
    }
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
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value='add'>Addition</option>
        <option value='subtract'>Subtraction</option>
        <option value='multiply'>Multiplication</option>
        <option value='divide'>Division</option>
      </select>
      <button onClick={handleCalculation}>Calculate</button>
      <div>{result !== null && <p>Result: {result}</p>}</div>
    </div>
  );
};

export default UniversalCalculator;
