import React from 'react';
import './Location.scss';

const Location = ({ location }) => {
  return (
    <dl className="Location">
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
  );
};

export default Location;
