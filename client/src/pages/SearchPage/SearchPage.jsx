import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import GET from '../../api';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import Pagination from '../../components/Pagination';
import getValidParams from '../../utils/getValidParams';
import useSeo from '../../hooks/useSeo';

const SearchPage = ({ match }) => {
  const { type, by, text, page } = getValidParams(match);
  const route = `/search/${type}/${by}/${text}/`;
  const query = `?${by}=${text}&page=${page}`;

  useSeo({ title: 'Search ' + text });

  const [listState, setListState] = useState({
    items: null,
    pages: null,
    type: type,
  });

  useEffect(() => {
    if (![type, by, text, page].includes(undefined)) {
      GET[type](query)
        .then((res) =>
          setListState({
            items: res.data.results,
            pages: res.data.info.pages,
            type: type,
          })
        )
        .catch(() => {
          setListState({ items: undefined, type: type });
        });
    }
  }, [type, by, text, page, query]);

  if ([type, by, text, page].includes(undefined)) return <Redirect to="/" />;

  let results = '';
  if (listState.items === null) results = 'Searching...';
  if (listState.items === undefined) results = 'Found nothing';
  if (listState.items)
    results = <CardList items={listState.items} type={listState.type} />;

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
