import React, { useState } from 'react';
import CardList from '../../components/CardList';
import { PageTitle } from '../../components/Typo';
import useItems from '../../hooks/useItems';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import EpisodeCard from '../../components/EpisodeCard';

const ItemsPage = ({ title, type, card }) => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const items = useItems(type, arr);

  document.title = title + ' | Rick and Morty';

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <section>
        <CardList items={items} card={card} />
      </section>
    </div>
  );
};

export const CharactersPage = () => {
  return <ItemsPage title="Characters" type="character" card={CharacterCard} />;
};

export const LocationsPage = () => {
  return <ItemsPage title="Locations" type="location" card={LocationCard} />;
};

export const EpisodesPage = () => {
  return <ItemsPage title="Episodes" type="episode" card={EpisodeCard} />;
};
