import React, { useEffect, useState } from 'react';
import GET from '../../api';
import CardList from '../../components/CardList';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import EpisodeCard from '../../components/EpisodeCard';
import { PageTitle, SectionTitle } from '../../components/Typo';
import Pagination from '../../components/Pagination';
import { Redirect } from 'react-router-dom';
import getValidParams from '../../utils/getValidParams';

const card = {
  character: CharacterCard,
  location: LocationCard,
  episode: EpisodeCard,
};

const SearchPage = ({ match }) => {
  const { type, by, text, page } = getValidParams(match);

  const route = `/search/${type}/${by}/${text}/`;
  const query = `?${by}=${text}&page=${page}`;

  const [listState, setListState] = useState({
    items: null,
    pages: null,
    type: type,
  });

  useEffect(() => {
    GET[type](query)
      .then((res) =>
        setListState({
          items: res.data.results,
          pages: res.data.info.pages,
          type: type,
        })
      )
      .catch(() => setListState({ items: undefined, type: type }));
  }, [type, query]);

  if (page === undefined) return <Redirect to="/" />;

  let results = '';
  if (listState.items === null) results = 'Searching...';
  if (listState.items === undefined) results = 'Found nothing';
  if (listState.items)
    results = <CardList items={listState.items} card={card[listState.type]} />;

  return (
    <>
      <PageTitle>{`Search ${type} by ${by}`}</PageTitle>
      <section>
        <SectionTitle>{`Results for ${text}`}</SectionTitle>
        {listState.pages > 1 && (
          <Pagination page={page} pageCount={listState.pages} route={route} />
        )}
        {results}
      </section>
    </>
  );
};

export default SearchPage;
