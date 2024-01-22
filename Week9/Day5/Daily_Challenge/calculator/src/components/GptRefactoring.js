import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { evaluate } from "mathjs";

// Global style
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

// Styled Components
const CalculatorContainer = styled.div`
  width: 300px;
  margin: 20px auto;
  background-color: black;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  padding-bottom: 20px;
`;

const Display = styled.div`
  background-color: transparent;
  color: white;
  padding: 20px;
  font-size: 30px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-x: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const CalcButton = styled.button`
  flex: 1;
  margin: 5px;
  padding: 20px 0;
  font-size: 24px;
  border-radius: 40px;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;

  &:hover {
    background-color: #9b9b9b;
  }

  &:focus {
    outline: none;
  }
`;

const OperatorButton = styled(CalcButton)`
  background-color: #fa8231;
  color: white;
  font-size: 28px;
  font-weight: 550;

  &:hover {
    background-color: #ff8c00;
  }
`;

const ButtonRow = styled.div`
  display: flex;
`;

const GptCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        // Evaluate the expression
        let calculatedResult = evaluate(input);
        calculatedResult = parseFloat(calculatedResult.toFixed(10));
        setResult(calculatedResult.toString());
      } catch (e) {
        setResult("Error");
      }
    } else if (value === "Clear") {
      setInput("");
      setResult("");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else if (value === ".") {
      const parts = input.split(/[\+\-\*\/]/); // Split input by operators
      const lastPart = parts[parts.length - 1];
      if (!lastPart.includes(".")) {
        // If the last part is empty or just "0", add "0."
        setInput(lastPart === "" || lastPart === "0" ? input + "0." : input + ".");
      }
    } else {
      const parts = input.split(/[\+\-\*\/]/);
      const lastPart = parts[parts.length - 1];

      if (value === "0") {
        if (lastPart === "" || (lastPart === "0" && input.slice(-1) !== ".")) {
          // Prevent adding "0" if the last part is empty or just "0" without a decimal point
          return;
        }
      }

      setInput(input + value);
      if (result !== "") {
        setResult("");
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <CalculatorContainer>
        <Display>
          <div>{input || "0"}</div>
          <div>{result}</div>
        </Display>

        {/* Button Rows */}
        <ButtonRow>
          <CalcButton onClick={() => handleButtonClick("7")}>7</CalcButton>
          <CalcButton onClick={() => handleButtonClick("8")}>8</CalcButton>
          <CalcButton onClick={() => handleButtonClick("9")}>9</CalcButton>
          <OperatorButton onClick={() => handleButtonClick("+")}>+</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <CalcButton onClick={() => handleButtonClick("4")}>4</CalcButton>
          <CalcButton onClick={() => handleButtonClick("5")}>5</CalcButton>
          <CalcButton onClick={() => handleButtonClick("6")}>6</CalcButton>
          <OperatorButton onClick={() => handleButtonClick("-")}>-</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <CalcButton onClick={() => handleButtonClick("1")}>1</CalcButton>
          <CalcButton onClick={() => handleButtonClick("2")}>2</CalcButton>
          <CalcButton onClick={() => handleButtonClick("3")}>3</CalcButton>
          <OperatorButton onClick={() => handleButtonClick("*")}>*</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <CalcButton onClick={() => handleButtonClick(".")}>,</CalcButton>
          <CalcButton onClick={() => handleButtonClick("0")}>0</CalcButton>
          <OperatorButton onClick={() => handleButtonClick("/")}>/</OperatorButton>
          <OperatorButton onClick={() => handleButtonClick("=")}>=</OperatorButton>
        </ButtonRow>
        <ButtonRow>
          <OperatorButton
            style={{ backgroundColor: "grey", color: "black" }}
            onClick={() => handleButtonClick("Clear")}
          >
            Clear
          </OperatorButton>
          <OperatorButton
            style={{ backgroundColor: "grey", color: "black" }}
            onClick={() => handleButtonClick("Del")}
          >
            Del
          </OperatorButton>
        </ButtonRow>
      </CalculatorContainer>
    </>
  );
};

export default GptCalculator;
