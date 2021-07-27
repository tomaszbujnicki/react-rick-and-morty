import React, { useState, useEffect } from 'react';
import './CharacterPage.scss';
import { Redirect } from 'react-router-dom';
import GET from '../../api';
import Loading from '../../components/Loading';
import Character from '../../components/Character';

const CharacterPage = (props) => {
  const id = props.match.params.id;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    GET.character(id)
      .then((res) => setCharacter(res.data))
      .catch(() => setCharacter(undefined));
  }, [id]);

  console.log(character);

  if (character === null) {
    return <Loading />;
  }

  if (character === undefined) {
    return <Redirect to="/" />;
  }

  return <Character character={character} />;
};

export default CharacterPage;
