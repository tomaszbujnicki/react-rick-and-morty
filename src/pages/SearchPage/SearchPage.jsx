import React, { useEffect, useState } from 'react';
import GET from '../../api';
import CardList from '../../components/CardList';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import EpisodeCard from '../../components/EpisodeCard';
import { PageTitle, SectionTitle } from '../../components/Typo';
import Pagination from '../../components/Pagination2';
import { Redirect } from 'react-router-dom';

const card = {
  character: CharacterCard,
  location: LocationCard,
  episode: EpisodeCard,
};

const getPage = (str) => {
  if (str === undefined) return 1;
  if (str === '0') return undefined;
  if (/\D/.test(str)) return undefined;
  return Number(str);
};

const SearchPage = ({ match }) => {
  const type = match.params.type;
  const by = match.params.by;
  const text = match.params.text;
  const page = getPage(match.params.page);
  const route = `/search/${type}/${by}/${text}/`;
  const query = `?${by}=${text}&page=${page}`;

  const [listState, setListState] = useState({
    items: null,
    pages: null,
    query: query,
    type: type,
  });

  useEffect(() => {
    GET[type](query)
      .then((res) =>
        setListState({
          items: res.data.results,
          pages: res.data.info.pages,
          query: query,
          type: type,
        })
      )
      .catch(() =>
        setListState({ items: undefined, query: query, type: type })
      );
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
      {listState.pages > 1 && (
        <Pagination page={page} pageCount={listState.pages} route={route} />
      )}
      <section>
        <SectionTitle>{`Results for ${text}`}</SectionTitle>
        {results}
      </section>
    </>
  );
};

export default SearchPage;
