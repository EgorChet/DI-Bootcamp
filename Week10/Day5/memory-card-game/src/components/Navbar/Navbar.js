import React from "react";
import "./Navbar.css";

function Navbar({ currentScore, topScore }) {
  return (
    <nav className='navbar'>
      <h1>Superhero Memory Game</h1>
      <div className='score-container'>
        <div className='score'>
          <span className='score-title'>Score</span>
          {currentScore}
        </div>
        <div className='score'>
          <span className='score-title'>Top Score</span>
          {topScore}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
