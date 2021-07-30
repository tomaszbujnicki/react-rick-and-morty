import React from 'react';
import './CardList.scss';
import EpisodeCard from '../EpisodeCard';
import CharacterCard from '../CharacterCard';
import LocationCard from '../LocationCard';
import useItems from '../../hooks/useItems';

const CARDS = {
  character: CharacterCard,
  location: LocationCard,
  episode: EpisodeCard,
};

const CardList = ({ type, ids }) => {
  const items = useItems(type, ids);
  if (!items) return <div></div>;
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
