import React from 'react';
import './Character.scss';

function Character({ character }) {
  return (
    <div className="Character">
      <h1>{character.name}</h1>
    </div>
  );
}

export default Character;
