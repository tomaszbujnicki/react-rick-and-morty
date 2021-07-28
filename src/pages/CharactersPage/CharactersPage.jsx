import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import CharacterCard from '../../components/CharacterCard';
import GET from '../../api';
import './CharactersPage.scss';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState([1]);

  useEffect(() => {
    GET.characters(page)
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.log(err));
  }, [page]);

  console.log(characters);

  if (characters.length === 0) {
    return <Loading />;
  }
  return <CharacterCard characters={characters} />;
};

export default CharactersPage;
