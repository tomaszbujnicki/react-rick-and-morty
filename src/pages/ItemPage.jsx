import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import Character from './Character';
import useItem from '../hooks/useItem';

const ItemPage = ({ type, id }) => {
  const item = useItem(type, id);

  if (item === null) return <Loading />;
  if (item === undefined) return <Redirect to="/" />;

  return <Character character={item} />;
};

export const CharacterPage = (props) => {
  return <ItemPage type="character" id={props.match.params.id} />;
};
