import { useState } from "react";
import quotes from "./QuotesDB";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: 40px auto;
  background-color: ${(props) => props.bgColor};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const QuoteText = styled.h1`
  color: ${(props) => props.textColor};
`;

const AuthorText = styled.p`
  color: ${(props) => props.textColor};
  font-size: 18px;
`;

const NextButton = styled.button`
  background-color: ${(props) => props.buttonColor};
  color: ${(props) => props.textColor};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

const QuoteViewer1 = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [usedIndices, setUsedIndices] = useState([currentIndex]);
  const [colors, setColors] = useState({
    bgColor: getRandomColor(),
    textColor: getRandomColor(),
    buttonColor: getRandomColor(),
  });

  const handleNextQuote = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * quotes.length);
    } while (usedIndices.includes(nextIndex));

    setCurrentIndex(nextIndex);
    setUsedIndices((prevIndices) => [...prevIndices, nextIndex].slice(-quotes.length));

    setColors({
      bgColor: getRandomColor(),
      textColor: getRandomColor(),
      buttonColor: getRandomColor(),
    });
  };

  const currentQuote = quotes[currentIndex];

  return (
    <Container bgColor={colors.bgColor}>
      <QuoteText textColor={colors.textColor}>{currentQuote.quote}</QuoteText>
      <AuthorText textColor={colors.textColor}>{currentQuote.author || "Unknown"}</AuthorText>
      <NextButton
        textColor={colors.textColor}
        buttonColor={colors.buttonColor}
        onClick={handleNextQuote}
      >
        Next Quote
      </NextButton>
    </Container>
  );
};

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default QuoteViewer1;
