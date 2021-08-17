import React from 'react';
import CharacterCard from '../CharacterCard';
import LocationCard from '../LocationCard';
import EpisodeCard from '../EpisodeCard';
import Loading from '../Loading';
import './CardList.scss';

const CARDS = {
  character: CharacterCard,
  location: LocationCard,
  episode: EpisodeCard,
};

const CardList = ({ items, type }) => {
  if (items === null) return <Loading />;
  if (items === undefined) return <div></div>;

  return (
    <ul className="CardList">
      {items.map((item, index) => (
        <li key={index}>{CARDS[type]({ item })}</li>
      ))}
    </ul>
  );
};

export default CardList;
