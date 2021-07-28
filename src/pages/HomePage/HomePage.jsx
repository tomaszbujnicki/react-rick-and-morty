import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import GET from '../../api';
import './HomePage.scss';
import ListOfCards from '../../components/ListOfCards';
import CharacterCard from '../../components/CharacterCard';
import LocationCard from '../../components/LocationCard';
import { PageTitle, SectionTitle } from '../../components/Typo';

const RandomLocations = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    GET.locations()
      .then((res) => {
        const count = res.data.info.count;
        const arr = getFourRandomNumbers(count);
        GET.location(arr).then((res) => {
          setCharacters(res.data);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {characters.length ? (
        <ListOfCards items={characters} Component={LocationCard} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

const RandomCharacters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    GET.characters()
      .then((res) => {
        const count = res.data.info.count;
        const arr = getFourRandomNumbers(count);
        GET.character(arr).then((res) => {
          setCharacters(res.data);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {characters.length ? (
        <ListOfCards items={characters} Component={CharacterCard} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <section className="HomePage">
      <PageTitle>Rick and Morty</PageTitle>
      <hr />
      <article>
        <SectionTitle>Characters</SectionTitle>
        <hr />
        <RandomCharacters />
      </article>
      <article>
        <SectionTitle>Locations</SectionTitle>
        <hr />
        <RandomLocations />
      </article>
      <article>
        <hr className="sectionTitle" />
        <SectionTitle>Episodes</SectionTitle>
      </article>
    </section>
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
