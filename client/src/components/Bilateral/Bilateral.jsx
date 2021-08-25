import React from 'react';
import './Bilateral.scss';

const Bilateral = ({ front, back }) => {
  return (
    <div className="Bilateral">
      <div className="Bilateral__content">{front}</div>
      <div className="Bilateral__content Bilateral__content--back">{back}</div>
    </div>
  );
};

export default Bilateral;
