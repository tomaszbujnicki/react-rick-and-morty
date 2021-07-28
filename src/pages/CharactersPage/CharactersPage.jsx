import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import CardList from '../../components/CardList';
import GET from '../../api';
import './CharactersPage.scss';
import CharacterCard from '../../components/CharacterCard';
import { PageTitle } from '../../components/Typo';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    GET.characters(page)
      .then((res) => setCharacters(res.data.results))
      .catch(() => setCharacters(undefined));
  }, [page]);

  if (characters === undefined) return <div></div>;

  if (characters.length === 0) return <Loading />;

  return (
    <div className="CharactersPage">
      <PageTitle>Characters</PageTitle>
      {characters.length === 0 ? (
        <Loading />
      ) : (
        <CardList Component={CharacterCard} items={characters} />
      )}
    </div>
  );
};

export default CharactersPage;
