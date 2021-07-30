import React from 'react';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToIds from '../../utils/mapUrlsToIds';

const List = ({ item }) => {
  return (
    <dl>
      <div className="definitionItem">
        <dt>Date</dt>
        <dd>{item.air_date}</dd>
      </div>
      <div className="definitionItem">
        <dt>Code</dt>
        <dd>{item.episode}</dd>
      </div>
      <div className="definitionItem">
        <dt>Characters</dt>
        <dd>{item.characters.length}</dd>
      </div>
    </dl>
  );
};

const Episode = ({ item }) => {
  const ids = mapUrlsToIds(item.characters);

  return (
    <div>
      <PageTitle>{item.name}</PageTitle>
      <section>
        <List item={item} />
      </section>
      <section>
        <SectionTitle>Characters:</SectionTitle>
        <CardList ids={ids} type={'character'} />
      </section>
    </div>
  );
};

export default Episode;
