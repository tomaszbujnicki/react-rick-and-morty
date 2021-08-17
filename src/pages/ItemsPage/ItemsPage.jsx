import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList';
import { PageTitle } from '../../components/Typo';
import Pagination from '../../components/Pagination';
import GET from '../../api';
import getValidParams from '../../utils/getValidParams';

const ItemsPage = ({ title, type, match }) => {
  document.title = title + ' | Rick and Morty';
  const { page } = getValidParams(match);
  const [items, setItems] = useState(null);
  const [pages, setPages] = useState(null);

  useEffect(() => {
    GET[type](`?page=${page}`)
      .then((res) => {
        setItems(res.data.results);
        setPages(res.data.info.pages);
      })
      .catch(() => setItems(undefined));
  }, [page, type]);

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <section>
        <Pagination page={page} pageCount={pages} route={`/${type}s/`} />
        <CardList items={items} type={type} />
      </section>
    </div>
  );
};

export const CharactersPage = ({ match }) => {
  return <ItemsPage title="Characters" type="character" match={match} />;
};

export const LocationsPage = ({ match }) => {
  return <ItemsPage title="Locations" type="location" match={match} />;
};

export const EpisodesPage = ({ match }) => {
  return <ItemsPage title="Episodes" type="episode" match={match} />;
};
