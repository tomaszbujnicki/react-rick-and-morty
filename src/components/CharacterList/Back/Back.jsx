import React from 'react';
import './Back.scss';

const Back = ({ character }) => {
  return (
    <dl className="Back">
      <div className="Back__item">
        <dt className="Back__key">Name</dt>
        <dd className="Back__value">{character.name}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Species</dt>
        <dd className="Back__value">{character.species}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Gender</dt>
        <dd className="Back__value">{character.gender}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Status</dt>
        <dd className="Back__value">{character.status}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Origin</dt>
        <dd className="Back__value">{character.origin.name}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Location</dt>
        <dd className="Back__value">{character.location.name}</dd>
      </div>
    </dl>
  );
};

export default Back;
