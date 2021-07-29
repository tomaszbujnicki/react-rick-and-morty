import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import GET from '../../api';
import './HomePage.scss';
import CardList from '../../components/CardList';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import getRandomNumbers from '../../utils/getRandomNumber';
import EpisodeCard from '../../components/EpisodeCard';

const componentCard = {
  character: CharacterCard,
  location: LocationCard,
  episode: EpisodeCard,
};

const RandomCardList = ({ type = 'character', count = 4 }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    GET[type + 's']()
      .then((res) => {
        const maxCount = res.data.info.count;
        const arr = getRandomNumbers(maxCount, count);
        GET[type](arr).then((res) => {
          setItems(res.data);
        });
      })
      .catch(() => setItems(undefined));
  }, [type, count]);

  if (items === undefined) return <div></div>;

  return (
    <div>
      {items.length ? (
        <CardList items={items} Component={componentCard[type]} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RandomCardList;
