import React from 'react';
import './Episode.scss';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToId from '../../utils/mapUrlsToId';

const List = ({ item }) => {
  return (
    <dl className="Episode">
      <div className="Episode__item">
        <dt className="Episode__key">Date</dt>
        <dd className="Episode__value">{item.air_date}</dd>
      </div>
      <div className="Episode__item">
        <dt className="Episode__key">Code</dt>
        <dd className="Episode__value">{item.episode}</dd>
      </div>
      <div className="Episode__item">
        <dt className="Episode__key">Characters</dt>
        <dd className="Episode__value">{item.characters.length}</dd>
      </div>
    </dl>
  );
};

const Episode = ({ item }) => {
  const ids = mapUrlsToId(item.characters);

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
