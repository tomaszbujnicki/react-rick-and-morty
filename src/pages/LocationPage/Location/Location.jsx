import React from 'react';
import './Location.scss';

const Location = ({ location }) => {
  return (
    <div className="Location">
      <h1 className="Location__title">{location.name}</h1>
      <dl>
        <div className="Location__item">
          <dt className="Location__key">Type</dt>
          <dd className="Location__value">{location.type}</dd>
        </div>
        <div className="Location__item">
          <dt className="Location__key">Dimension</dt>
          <dd className="Location__value">{location.dimension}</dd>
        </div>
        <div className="Location__item">
          <dt className="Location__key">Residents</dt>
          <dd className="Location__value">{location.residents.length}</dd>
        </div>
      </dl>
    </div>
  );
};

export default Location;
