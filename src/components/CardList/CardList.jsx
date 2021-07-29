import React from 'react';
import './CardList.scss';
import EpisodeCard from '../EpisodeCard';
import CharacterCard from '../CharacterCard';
import LocationCard from '../LocationCard';

const CARDS = {
  character: CharacterCard,
  location: LocationCard,
  episode: EpisodeCard,
};

const CardList = ({ items, type }) => {
  console.log(items, type);
  const itemList = Array.isArray(items) ? items : [items];

  return (
    <ul className="CardList">
      {itemList.map((item) => (
        <li key={item.id}>{CARDS[type]({ item })}</li>
      ))}
    </ul>
  );
};

export default CardList;
