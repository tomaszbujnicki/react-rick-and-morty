import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import CharacterList from '../../components/CharacterList';
import GET from '../../api';
import './HomePage.scss';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    GET.characters()
      .then((res) => {
        const count = res.data.info.count;
        const arr = getFourRandomNumbers(count);
        console.log(arr);
        GET.character(arr).then((res) => {
          console.log(res);
          setCharacters(res.data);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(characters);

  return (
    <div className="HomePage">
      <h2>Characters</h2>
      {characters.length && <CharacterList characters={characters} />}
      <h2>Locations</h2>
      <h2>Episodes</h2>
    </div>
  );
};

export default HomePage;

const getFourRandomNumbers = (max) => {
  const arr = [];
  while (arr.length < 4) {
    const random = Math.floor(Math.random() * max);
    arr.push(random);
  }
  return arr;
};
