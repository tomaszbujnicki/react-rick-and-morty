import React from 'react';
import CharacterCard from '../../components/CharacterCard';
import Page from '../../components/Page';

const CharactersPage = () => {
  return (
    <Page title="Characters" CardComponent={CharacterCard} type="character" />
  );
};

export default CharactersPage;
