import React from "react";
import { useNavigate } from "react-router-dom";
import "./Congratulations.css";

function Congratulations() {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/");
  };

  return (
    <div className='congrats-page'>
      <h1>Congratulations! You Won!</h1>
      <p>Well done on scoring 12 out of 12!</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}

export default Congratulations;
