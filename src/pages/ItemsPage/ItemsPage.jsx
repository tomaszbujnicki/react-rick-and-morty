import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList';
import { PageTitle } from '../../components/Typo';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import EpisodeCard from '../../components/EpisodeCard';
import Pagination from '../../components/Pagination';
import GET from '../../api';
import getValidParams from '../../utils/getValidParams';

const ItemsPage = ({ title, type, card, match }) => {
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
  }, [page]);

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <section>
        <Pagination page={page} pageCount={pages} route={`/${type}s/`} />
        <CardList items={items} card={card} />
      </section>
    </div>
  );
};

export const CharactersPage = ({ match }) => {
  return (
    <ItemsPage
      title="Characters"
      type="character"
      card={CharacterCard}
      match={match}
    />
  );
};

export const LocationsPage = ({ match }) => {
  return (
    <ItemsPage
      title="Locations"
      type="location"
      card={LocationCard}
      match={match}
    />
  );
};

export const EpisodesPage = ({ match }) => {
  return (
    <ItemsPage
      title="Episodes"
      type="episode"
      card={EpisodeCard}
      match={match}
    />
  );
};
