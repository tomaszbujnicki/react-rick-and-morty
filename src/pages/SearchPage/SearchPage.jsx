import React, { useEffect, useState } from 'react';
import GET from '../../api';
import CardList from '../../components/CardList';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import EpisodeCard from '../../components/EpisodeCard';
import { useLocation } from 'react-router-dom';
import { PageTitle, SectionTitle } from '../../components/Typo';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

const card = {
  character: CharacterCard,
  location: LocationCard,
  episode: EpisodeCard,
};

const SearchPage = (params) => {
  const location = useLocation();
  const query = location.search;
  const type = params.match.params.type;

  const [state, setState] = useState({
    items: null,
    display: false,
    query: location.search,
    type: params.match.params.type,
  });

  useEffect(() => {
    setState({ items: null });
    GET[type](query)
      .then((res) =>
        setState({
          items: res.data.results,
          query: query,
          type: type,
        })
      )
      .catch(() => setState({ items: undefined, query: query, type: type }));
  }, [type, query]);

  let results = '';
  if (state.items === null) results = 'Searching...';
  if (state.items === undefined) results = 'Found nothing';
  if (state.items)
    results = <CardList items={state.items} card={card[state.type]} />;

  return (
    <>
      <PageTitle>
        {capitalizeFirstLetter(type)} search results by {query.match(/\w+/)}
      </PageTitle>
      <section>
        <SectionTitle>
          {query.replace(/^\?\w+=/, '').replace(/%20/, ' ')}
        </SectionTitle>
        {results}
      </section>
    </>
  );
};

export default SearchPage;
