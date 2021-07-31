import React, { useState } from 'react';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToIds from '../../utils/mapUrlsToIds';
import useItems from '../../hooks/useItems';
import CharacterCard from '../../components/CharacterCard';
import ItemPageFrame from '../../components/ItemPageFrame';
import useItem from '../../hooks/useItem';

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

const Content = ({ item }) => {
  const [ids] = useState(mapUrlsToIds(item.residents));
  const items = useItems('character', ids);

  const residents =
    ids.length === 0 ? (
      <div>No one lives here.</div>
    ) : (
      <CardList items={items} card={CharacterCard} />
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

const LocationPage = ({ match }) => {
  const item = useItem('location', match.params.id);
  return <ItemPageFrame item={item} Content={Content} />;
};

export default LocationPage;
