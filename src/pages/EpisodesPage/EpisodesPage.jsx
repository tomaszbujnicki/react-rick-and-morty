import React from 'react';
import EpisodeCard from '../../components/EpisodeCard';
import Page from '../../components/Page';

const EpisodesPage = () => {
  return <Page title="Episodes" CardComponent={EpisodeCard} type="episode" />;
};

export default EpisodesPage;
