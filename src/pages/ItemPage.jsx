import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import useItem from '../hooks/useItem';
import Character from './Character';
import Episode from './Episode/';
import Location from './Location';

const PageContent = {
  character: Character,
  episode: Episode,
  location: Location,
};

const ItemPage = ({ type, id }) => {
  const item = useItem(type, id);

  if (item === null) return <Loading />;
  if (item === undefined) return <Redirect to="/" />;

  return <div>{PageContent[type]({ item })}</div>;
};

export const CharacterPage = (props) => {
  return <ItemPage type="character" id={props.match.params.id} />;
};

export const EpisodePage = (props) => {
  return <ItemPage type="episode" id={props.match.params.id} />;
};

export const LocationPage = (props) => {
  return <ItemPage type="location" id={props.match.params.id} />;
};
