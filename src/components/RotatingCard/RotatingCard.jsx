import React from 'react';
import Card from '../Card';
import './RotatingCard.scss';

const RotatingCard = ({ front, back }) => {
  return (
    <Card>
      <div className="RotatingCard">
        <div className="RotatingCard__content">{front}</div>
        <div className="RotatingCard__content RotatingCard__content--back">
          {back}
        </div>
      </div>
    </Card>
  );
};

export default RotatingCard;
