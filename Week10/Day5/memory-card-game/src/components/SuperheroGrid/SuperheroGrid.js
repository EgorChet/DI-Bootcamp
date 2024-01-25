import React, { useState, useEffect } from "react";
import SuperheroCard from "../SuperheroCard/SuperheroCard";
import "./SuperheroGrid.css";

function SuperheroGrid({ superheroes, setCurrentScore, currentScore }) {
  const [clickedIds, setClickedIds] = useState([]);
  const [shuffledSuperheroes, setShuffledSuperheroes] = useState([...superheroes]);

  const shuffleSuperheroes = () => {
    const shuffled = [...shuffledSuperheroes].sort(() => Math.random() - 0.5);
    setShuffledSuperheroes(shuffled);
  };

  useEffect(() => {
    shuffleSuperheroes();
  }, [clickedIds]);

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      alert(`Oops! You've already clicked that card. Your final score was: ${currentScore}`);
      setCurrentScore(0);
      setClickedIds([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedIds([...clickedIds, id]);
    }
  };

  return (
    <div className='grid'>
      {shuffledSuperheroes.map((superhero) => (
        <SuperheroCard key={superhero.id} superhero={superhero} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
}

export default SuperheroGrid;
