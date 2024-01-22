

import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Global style to include Roboto font
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
  background-color: black; // iPhone calculator has a black background
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  padding-bottom: 20px; // Added padding for inner spacing
`;

const Display = styled.div`
  background-color: transparent; // No background color for a transparent look
  color: white; // White text for visibility against the black background
  padding: 20px;
  font-size: 30px; // Adjusted for better visibility
  min-height: 60px; // Enough height for display content
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow-x: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Button = styled.button`
  flex: 1; // Flex grow to fill the row
  margin: 5px; // Space between buttons
  padding: 20px 0;
  font-size: 24px;
  border-radius: 40px; // Fully rounded buttons
  background-color: #333; // Dark buttons for contrast
  color: white; // White text for visibility
  cursor: pointer;
  transition: background-color 0.2s;
  border: none; // Remove border

  &:hover {
    background-color: #9b9b9b;
  }

  &:focus {
    outline: none;
  }
`;

const OperatorButton = styled(Button)`
  background-color: #fa8231; // Orange color for operators
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

const WideButton = styled(Button)`
  flex: 2; // Double width for the zero button
`;

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult("Error");
      }
    } else if (value === "Clear") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === ".") {
      if (!input.includes(".")) {
        setInput(input + ".");
      }
    } else {
      setInput(input + value);
      if (result !== "") {
        setResult("");
      }
    }
  };

  return (
    <CalculatorContainer>
      <Display>{input || "0"}</Display>

      <ButtonRow>
        <Button onClick={() => handleButtonClick("7")}>7</Button>
        <Button onClick={() => handleButtonClick("8")}>8</Button>
        <Button onClick={() => handleButtonClick("9")}>9</Button>
        <OperatorButton onClick={() => handleButtonClick("+")}>+</OperatorButton>
      </ButtonRow>
      <ButtonRow>
        <Button onClick={() => handleButtonClick("4")}>4</Button>
        <Button onClick={() => handleButtonClick("5")}>5</Button>
        <Button onClick={() => handleButtonClick("6")}>6</Button>
        <OperatorButton onClick={() => handleButtonClick("-")}>-</OperatorButton>
      </ButtonRow>
      <ButtonRow>
        <Button onClick={() => handleButtonClick("1")}>1</Button>
        <Button onClick={() => handleButtonClick("2")}>2</Button>
        <Button onClick={() => handleButtonClick("3")}>3</Button>
        <OperatorButton onClick={() => handleButtonClick("*")}>
          <span style={{ display: "inline-block", transform: "rotate(45deg)" }}>+</span>
        </OperatorButton>
      </ButtonRow>
      <ButtonRow>
        <Button onClick={() => handleButtonClick("0")} style={{ flex: 2 }}>
          0
        </Button>
        <Button onClick={() => handleButtonClick(".")}>,</Button>
        <OperatorButton onClick={() => handleButtonClick("/")}>÷</OperatorButton>
      </ButtonRow>
      <ButtonRow>
        <OperatorButton
          style={{ backgroundColor: "grey", color: "black" }}
          onClick={() => handleButtonClick("Clear")}
        >
          AC
        </OperatorButton>
        <OperatorButton
          style={{ backgroundColor: "grey", color: "black" }}
          onClick={() => handleButtonClick("DEL")}
        >
          Del
        </OperatorButton>

        <OperatorButton onClick={() => handleButtonClick("=")}>=</OperatorButton>
      </ButtonRow>
      <Display style={{ justifyContent: "right" }}>{result}</Display>
    </CalculatorContainer>
  );
};

export default Calculator;
