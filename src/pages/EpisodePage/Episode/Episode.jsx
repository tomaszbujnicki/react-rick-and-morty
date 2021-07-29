import React from 'react';
import './Episode.scss';

const Episode = ({ episode }) => {
  return (
    <dl className="Episode">
      <div className="Episode__item">
        <dt className="Episode__key">Date</dt>
        <dd className="Episode__value">{episode.air_date}</dd>
      </div>
      <div className="Episode__item">
        <dt className="Episode__key">Code</dt>
        <dd className="Episode__value">{episode.episode}</dd>
      </div>
      <div className="Episode__item">
        <dt className="Episode__key">Characters</dt>
        <dd className="Episode__value">{episode.characters.length}</dd>
      </div>
    </dl>
  );
};

export default Episode;
