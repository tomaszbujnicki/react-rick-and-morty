import React from 'react';
import CardList from '../../components/CardList';
import { PageTitle } from '../../components/Typo';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import EpisodeCard from '../../components/EpisodeCard';
import Pagination from '../../components/Pagination/Pagination';

const ItemsPage = ({ title, type, card }) => {
  document.title = title + ' | Rick and Morty';

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <section>
        <Pagination
          query={''}
          type={type}
          ListComponent={({ items }) => <CardList card={card} items={items} />}
        />
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
