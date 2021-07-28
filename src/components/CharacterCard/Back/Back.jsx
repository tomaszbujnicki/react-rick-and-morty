import React from 'react';
import './Back.scss';

const Back = ({ item }) => {
  return (
    <dl className="Back">
      <div className="Back__item">
        <dt className="Back__key">Name</dt>
        <dd className="Back__value">{item.name}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Species</dt>
        <dd className="Back__value">{item.species}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Gender</dt>
        <dd className="Back__value">{item.gender}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Status</dt>
        <dd className="Back__value">{item.status}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Origin</dt>
        <dd className="Back__value">{item.origin.name}</dd>
      </div>
      <div className="Back__item">
        <dt className="Back__key">Location</dt>
        <dd className="Back__value">{item.location.name}</dd>
      </div>
    </dl>
  );
};

export default Back;
