import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Character.scss';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToIds from '../../utils/mapUrlsToIds';
import mapUrlToId from '../../utils/mapUrlToId';
import Card from '../../components/Card';
import useItems from '../../hooks/useItems';
import EpisodeCard from '../../components/EpisodeCard';
import ItemPageFrame from '../../components/ItemPageFrame';
import useItem from '../../hooks/useItem';

const List = ({ item }) => {
  const origin =
    item.origin.name === 'unknown' ? (
      item.origin.name
    ) : (
      <Link className="link" to={'/location/' + mapUrlToId(item.origin.url)}>
        {item.origin.name}
      </Link>
    );
  const location =
    item.location.name === 'unknown' ? (
      item.location.name
    ) : (
      <Link className="link" to={'/location/' + mapUrlToId(item.location.url)}>
        {item.location.name}
      </Link>
    );

  return (
    <dl className="Character">
      <div className="definitionItem">
        <dt>Species</dt>
        <dd>{item.species}</dd>
      </div>
      <div className="definitionItem">
        <dt>Gender</dt>
        <dd>{item.gender}</dd>
      </div>
      <div className="definitionItem">
        <dt>Type</dt>
        <dd>{item.type || '-'}</dd>
      </div>
      <div className="definitionItem">
        <dt>Status</dt>
        <dd>{item.status}</dd>
      </div>
      <div className="definitionItem">
        <dt>Origin</dt>
        <dd>{origin}</dd>
      </div>
      <div className="definitionItem">
        <dt>Location</dt>
        <dd>{location}</dd>
      </div>
      <div className="definitionItem">
        <dt>Episodes</dt>
        <dd>{item.episode.length}</dd>
      </div>
    </dl>
  );
};

const Content = ({ item }) => {
  const [ids] = useState(mapUrlsToIds(item.episode));
  const items = useItems('episode', ids);

  return (
    <div>
      <PageTitle>{item.name}</PageTitle>
      <section>
        <div className="Char">
          <div className="Char__content">
            <Card>
              <img src={item.image} alt="" />
            </Card>
          </div>
          <div className="Char__content Char__content--fluid">
            <List item={item} />
          </div>
        </div>
      </section>
      <section>
        <SectionTitle>Episodes:</SectionTitle>
        <CardList items={items} card={EpisodeCard} />
      </section>
    </div>
  );
};

const CharacterPage = ({ match }) => {
  const item = useItem('character', match.params.id);
  return <ItemPageFrame item={item} Content={Content} />;
};

export default CharacterPage;
