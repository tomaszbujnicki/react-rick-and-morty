import React from 'react';
import './Location.scss';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToId from '../../utils/mapUrlsToId';

const List = ({ item }) => {
  return (
    <dl className="Location">
      <div className="Location__item">
        <dt className="Location__key">Type</dt>
        <dd className="Location__value">{item.type}</dd>
      </div>
      <div className="Location__item">
        <dt className="Location__key">Dimension</dt>
        <dd className="Location__value">{item.dimension}</dd>
      </div>
      <div className="Location__item">
        <dt className="Location__key">Residents</dt>
        <dd className="Location__value">{item.residents.length}</dd>
      </div>
    </dl>
  );
};

const Location = ({ item }) => {
  const ids = mapUrlsToId(item.residents);

  const residents =
    ids.length === 0 ? (
      <div>No one lives here.</div>
    ) : (
      <CardList ids={ids} type={'character'} />
    );

  return (
    <div>
      <PageTitle>{item.name}</PageTitle>
      <section>
        <List item={item} />
      </section>
      <section>
        <SectionTitle>Residents:</SectionTitle>
        {residents}
      </section>
    </div>
  );
};

export default Location;
