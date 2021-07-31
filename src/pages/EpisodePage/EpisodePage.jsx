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

const Content = ({ item }) => {
  const [ids] = useState(mapUrlsToIds(item.characters));
  const items = useItems('character', ids);

  return (
    <div>
      <PageTitle>{item.name}</PageTitle>
      <section>
        <List item={item} />
      </section>
      <section>
        <SectionTitle>Characters:</SectionTitle>
        <CardList items={items} card={CharacterCard} />
      </section>
    </div>
  );
};

const EpisodePage = ({ match }) => {
  const item = useItem('episode', match.params.id);
  return <ItemPageFrame item={item} Content={Content} />;
};

export default EpisodePage;
