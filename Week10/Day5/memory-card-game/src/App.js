import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuperheroGrid from "./components/SuperheroGrid/SuperheroGrid";
import Navbar from "./components/Navbar/Navbar";
import Instructions from "./components/Instructions/Instructions";
import Congratulations from "./components/Congratulations/Congratulations";
import superheroesData from "./data/superheroes.json";
import "./App.css";

function App() {
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    if (currentScore > topScore) {
      setTopScore(currentScore);
    }
    if (currentScore === 12) {
      window.location.href = "/congratulations"; // Navigate to congratulations page
    }
  }, [currentScore, topScore]);

  return (
    <Router>
      <div className='App'>
        <Navbar currentScore={currentScore} topScore={topScore} />
        <Instructions />
        <Routes>
          <Route
            path='/'
            element={
              <SuperheroGrid
                superheroes={superheroesData.superheroes}
                setCurrentScore={setCurrentScore}
                currentScore={currentScore}
              />
            }
          />
          <Route path='/congratulations' element={<Congratulations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
