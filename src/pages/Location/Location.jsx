import React from 'react';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToIds from '../../utils/mapUrlsToIds';

const List = ({ item }) => {
  return (
    <dl>
      <div className="definitionItem">
        <dt>Type</dt>
        <dd>{item.type}</dd>
      </div>
      <div className="definitionItem">
        <dt>Dimension</dt>
        <dd>{item.dimension}</dd>
      </div>
      <div className="definitionItem">
        <dt>Residents</dt>
        <dd>{item.residents.length}</dd>
      </div>
    </dl>
  );
};

const Location = ({ item }) => {
  const ids = mapUrlsToIds(item.residents);

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
