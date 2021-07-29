import React, { useState } from 'react';
import CardList from '../components/CardList';
import { PageTitle } from '../components/Typo';

const ItemsPage = ({ title, type }) => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <section>
        <CardList type={type} ids={arr} />
      </section>
    </div>
  );
};

export const CharactersPage = () => {
  return <ItemsPage title="Characters" type="character" />;
};

export const LocationsPage = () => {
  return <ItemsPage title="Locations" type="location" />;
};

export const EpisodesPage = () => {
  return <ItemsPage title="Episodes" type="episode" />;
};
