import React, { useState } from 'react';
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

const CardList = ({ items, type, count = 20 }) => {
  const [itemCount, setItemCount] = useState(count);

  if (items === null) return <Loading />;
  if (items === undefined) return <div></div>;

  const showMore = () => setItemCount((prev) => prev + count);

  const itemList = items.slice(0, itemCount);

  return (
    <>
      <ul className="CardList">
        {itemList.map((item, index) => (
          <li key={index}>{CARDS[type]({ item })}</li>
        ))}
      </ul>
      {items.length > itemCount && (
        <button className="CardList__button" onClick={showMore}>
          Show more ({items.length - itemCount} remaining)
        </button>
      )}
    </>
  );
};

export default CardList;
