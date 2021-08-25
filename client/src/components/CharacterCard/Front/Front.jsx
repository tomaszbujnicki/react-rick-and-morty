import React from 'react';
import { ArticleTitle, SubTitle } from '../../Typo';
import './Front.scss';

const Front = ({ item }) => {
  return (
    <div className="Front">
      <div>
        <img src={item.image} alt="" />
      </div>
      <header className="Front__heading">
        <ArticleTitle>{item.name}</ArticleTitle>
        <SubTitle>{item.species}</SubTitle>
      </header>
    </div>
  );
};

export default Front;
