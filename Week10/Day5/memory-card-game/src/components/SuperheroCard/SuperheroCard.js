import React from 'react';
import './SuperheroCard.css';

function SuperheroCard({ superhero, handleCardClick }) {
  return (
    <div className="card" onClick={() => handleCardClick(superhero.id)}>
      <img src={superhero.image} alt={superhero.name} />
      <h3>{superhero.name}</h3>
      <p>{superhero.occupation}</p>
    </div>
  );
}

export default SuperheroCard;
