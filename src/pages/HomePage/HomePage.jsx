import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import CharacterList from '../../components/CharacterList';
import GET from '../../api';
import './HomePage.scss';

function HomePage() {
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
  return <CharacterList characters={characters} />;
}

export default HomePage;
