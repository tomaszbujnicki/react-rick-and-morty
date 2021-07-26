import React from 'react';
import { Link } from 'react-router-dom';

import './CharacterPreview.scss';

function CharacterPreview({ character }) {
  return (
    <Link className="" to={'/character/' + character.id}>
      <div className="CharacterPreview">
        <div className="CharacterPreview__content">
          <div>
            <img src={character.image} alt="" />
          </div>
          <header className="CharacterPreview__heading">
            <h3 className="CharacterPreview__name">{character.name}</h3>
            <p className="CharacterPreview__species">{character.species}</p>
          </header>
        </div>
        <div className="CharacterPreview__content CharacterPreview__content--reverse"></div>
      </div>
    </Link>
  );
}

export default CharacterPreview;
