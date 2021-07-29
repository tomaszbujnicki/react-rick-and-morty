import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import CardList from '../components/CardList';
import { PageTitle } from '../components/Typo';
import useItems from '../hooks/useItems';

const ItemsPage = ({ title, type }) => {
  const [arr, setArr] = useState(['1', '2', '3']);
  const items = useItems(type, arr);

  if (items === null) return <Loading />;
  if (items === undefined) return <Redirect to="/" />;

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <section>
        {items.length === 0 ? (
          <Loading />
        ) : (
          <CardList type={type} items={items} />
        )}
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
