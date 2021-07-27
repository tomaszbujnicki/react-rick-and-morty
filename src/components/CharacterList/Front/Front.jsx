import React from 'react';
import './Front.scss';

const Front = ({ character }) => {
  return (
    <div className="Front">
      <div>
        <img src={character.image} alt="" />
      </div>
      <header className="Front__heading">
        <h3 className="Front__name">{character.name}</h3>
        <p className="Front__species">{character.species}</p>
      </header>
    </div>
  );
};

export default Front;
