import React from 'react';
import './RotatingCard.scss';

const RotatingCard = ({ front, back }) => {
  return (
    <div className="RotatingCard">
      <div className="RotatingCard__content">{front}</div>
      <div className="RotatingCard__content RotatingCard__content--back">
        {back}
      </div>
    </div>
  );
};

export default RotatingCard;
