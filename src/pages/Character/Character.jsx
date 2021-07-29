import React from 'react';
import { Link } from 'react-router-dom';
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
            <dt className="Character__key">Type</dt>
            <dd className="Character__value">{character.type || '-'}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Status</dt>
            <dd className="Character__value">{character.status}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Origin</dt>
            {character.origin.name === 'unknown' ? (
              <dd className="Character__value">{character.origin.name}</dd>
            ) : (
              <Link to={'/location/' + getId(character.origin.url)}>
                <dd className="Character__value">{character.origin.name}</dd>
              </Link>
            )}
          </div>
          <div className="Character__item">
            <dt className="Character__key">Location</dt>
            {character.origin.name === 'unknown' ? (
              <dd className="Character__value">{character.origin.name}</dd>
            ) : (
              <Link to={'/location/' + getId(character.location.url)}>
                <dd className="Character__value">{character.location.name}</dd>
              </Link>
            )}
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Character;

const getId = (url) => {
  const urlBase = 'https://rickandmortyapi.com/api/location/';
  const id = url.replace(urlBase, '');
  return id;
};
