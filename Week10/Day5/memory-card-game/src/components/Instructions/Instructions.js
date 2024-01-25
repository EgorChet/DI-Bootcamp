import React from 'react';
import './Instructions.css';

function Instructions() {
  return (
    <div className="instructions">
      <h2>How to Play</h2>
      <p>Welcome to the Superhero Memory Game! Here's how to play:</p>
      <ul>
        <li>Click on a superhero card to earn points.</li>
        <li>Every time you click a card, the cards will shuffle.</li>
        <li>Be careful not to click the same card twice!</li>
        <li>If you do, your score will reset to zero.</li>
        <li>Try to click all different cards to achieve the highest score possible.</li>
      </ul>
      <p>Good luck and have fun!</p>
    </div>
  );
}

export default Instructions;
