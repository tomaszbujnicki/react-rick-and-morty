import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import Episode from './Episode';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToId from '../../utils/mapUrlsToId';
import useItem from '../../hooks/useItem';
import useItems from '../../hooks/useItems';

const EpisodePage = (props) => {
  const id = props.match.params.id;
  const episode = useItem('episode', id);

  if (episode === null) {
    return <Loading />;
  }

  if (episode === undefined) {
    return <Redirect to="/" />;
  }

  const ids = mapUrlsToId(episode.characters);

  return (
    <div>
      <PageTitle>{episode.name}</PageTitle>
      <section>
        <Episode episode={episode} />
      </section>
      <section>
        <SectionTitle>Characters:</SectionTitle>
        <ResidentList ids={ids} />
      </section>
    </div>
  );
};

export default EpisodePage;

const ResidentList = ({ ids }) => {
  const residents = useItems('character', ids);

  if (!residents) return <div></div>;

  return <CardList items={residents} type={'character'} />;
};
