import React from 'react';
import { PageTitle, SectionTitle } from '../../components/Typo';
import RandomCardList from './RandomCardList';
import { Link } from 'react-router-dom';
import useSeo from '../../hooks/useSeo';

const HomePage = () => {
  useSeo({});
  return (
    <div>
      <PageTitle>Rick and Morty</PageTitle>
      <section>
        <Link className="link" to={'/characters'}>
          <SectionTitle>Characters</SectionTitle>
        </Link>
        <RandomCardList type="character" count="4" />
      </section>
      <section>
        <Link className="link" to={'/locations'}>
          <SectionTitle>Locations</SectionTitle>
        </Link>
        <RandomCardList type="location" count="4" />
      </section>
      <section>
        <Link className="link" to={'/episodes'}>
          <SectionTitle>Episodes</SectionTitle>
        </Link>
        <RandomCardList type="episode" count="4" />
      </section>
    </div>
  );
};

export default HomePage;
