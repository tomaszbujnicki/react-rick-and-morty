import React from 'react';
import Back from './Back';
import Front from './Front';
import './CharacterCard.scss';
import { Link } from 'react-router-dom';
import RotatingCard from './../RotatingCard';

const CharacterCard = ({ item }) => {
  return (
    <Link className="" to={'/character/' + item.id}>
      <RotatingCard front={<Front item={item} />} back={<Back item={item} />} />
    </Link>
  );
};

export default CharacterCard;
