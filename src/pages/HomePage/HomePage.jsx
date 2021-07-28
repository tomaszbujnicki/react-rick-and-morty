import React from 'react';
import './HomePage.scss';
import { PageTitle, SectionTitle } from '../../components/Typo';
import RandomCardList from './RandomCardList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
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
      </section>
    </div>
  );
};

export default HomePage;
