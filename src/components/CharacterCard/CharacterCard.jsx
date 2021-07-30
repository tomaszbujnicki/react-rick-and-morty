import React from 'react';
import Back from './Back';
import Front from './Front';
import './CharacterCard.scss';
import { Link } from 'react-router-dom';
import Bilateral from './../Bilateral';
import Card from '../Card';

const CharacterCard = ({ item }) => {
  return (
    <Link className="" to={'/character/' + item.id}>
      <Card style={{ overflow: 'visible' }}>
        <Bilateral front={<Front item={item} />} back={<Back item={item} />} />
      </Card>
    </Link>
  );
};

export default CharacterCard;
