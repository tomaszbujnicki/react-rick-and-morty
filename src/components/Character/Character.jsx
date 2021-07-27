import React from 'react';
import './Character.scss';

const Character = ({ character }) => {
  return (
    <div className="Character">
      <div className="Character__content">
        <img className="Character__image" src={character.image} alt="" />
      </div>
      <div className="Character__content">
        <h1 className="Character__title">{character.name}</h1>
        <dl>
          <div className="Character__item">
            <dt className="Character__key">Species</dt>
            <dd className="Character__value">{character.species}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Gender</dt>
            <dd className="Character__value">{character.gender}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Status</dt>
            <dd className="Character__value">{character.status}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Origin</dt>
            <dd className="Character__value">{character.origin.name}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Location</dt>
            <dd className="Character__value">{character.location.name}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Character;
