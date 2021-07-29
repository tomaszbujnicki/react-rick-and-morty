import React from 'react';
import './CharacterPage.scss';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import Character from './Character';
import useItem from '../../hooks/useItem';

const CharacterPage = (props) => {
  const id = props.match.params.id;
  const character = useItem('character', id);

  if (character === null) {
    return <Loading />;
  }

  if (character === undefined) {
    return <Redirect to="/" />;
  }

  return <Character character={character} />;
};

export default CharacterPage;
