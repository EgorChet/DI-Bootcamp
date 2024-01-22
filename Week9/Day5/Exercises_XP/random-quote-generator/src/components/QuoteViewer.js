import { useState } from "react";
import quotes from "./QuotesDB";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: 40px auto;
  background-color: #f8f8f7;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const QuoteText = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: normal;
`;

const AuthorText = styled.p`
  color: #666;
  font-size: 18px;
`;

const NextButton = styled.button`
  background-color: #007aff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #005ecb;
  }
`;

const QuoteViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextQuote = () => {
    setCurrentIndex((prevIndex) => {
      // If the end of the array is reached, return to the start
      return prevIndex >= quotes.length - 1 ? prevIndex : prevIndex + 1;
    });
  };

  const currentQuote = quotes[currentIndex];

  return (
    <Container>
      <QuoteText>{currentQuote.quote}</QuoteText>
      <AuthorText>{currentQuote.author || "Unknown"}</AuthorText>
      <NextButton onClick={handleNextQuote}>Next Quote</NextButton>
    </Container>
  );
};

export default QuoteViewer;
