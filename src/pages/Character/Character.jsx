import React from 'react';
import { Link } from 'react-router-dom';
import './Character.scss';

const Character = ({ item }) => {
  return (
    <div className="Character">
      <div className="Character__content">
        <img className="Character__image" src={item.image} alt="" />
      </div>
      <div className="Character__content">
        <h1 className="Character__title">{item.name}</h1>
        <dl>
          <div className="Character__item">
            <dt className="Character__key">Species</dt>
            <dd className="Character__value">{item.species}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Gender</dt>
            <dd className="Character__value">{item.gender}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Type</dt>
            <dd className="Character__value">{item.type || '-'}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Status</dt>
            <dd className="Character__value">{item.status}</dd>
          </div>
          <div className="Character__item">
            <dt className="Character__key">Origin</dt>
            {item.origin.name === 'unknown' ? (
              <dd className="Character__value">{item.origin.name}</dd>
            ) : (
              <Link to={'/location/' + getId(item.origin.url)}>
                <dd className="Character__value">{item.origin.name}</dd>
              </Link>
            )}
          </div>
          <div className="Character__item">
            <dt className="Character__key">Location</dt>
            {item.origin.name === 'unknown' ? (
              <dd className="Character__value">{item.origin.name}</dd>
            ) : (
              <Link to={'/location/' + getId(item.location.url)}>
                <dd className="Character__value">{item.location.name}</dd>
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
