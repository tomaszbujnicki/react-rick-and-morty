import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import GET from '../../api';
import Loading from '../../components/Loading';
import Episode from './Episode';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToId from '../../utils/mapUrlsToId';

const EpisodePage = (props) => {
  const id = props.match.params.id;
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    GET.episode(id)
      .then((res) => setEpisode(res.data))
      .catch(() => setEpisode(undefined));
  }, [id]);

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
      <Episode episode={episode} />
      <SectionTitle>Characters:</SectionTitle>
      <ResidentList ids={ids} />
    </div>
  );
};

export default EpisodePage;

const ResidentList = ({ ids }) => {
  const [residents, setResidents] = useState(null);

  useEffect(() => {
    GET.character(ids)
      .then((res) => setResidents(res.data))
      .catch(() => setResidents(undefined));
  }, [ids]);

  if (!residents) return <div></div>;

  return (
    <div className="EpisodePage__residents">
      <CardList items={residents} Component={CharacterCard} />
    </div>
  );
};
