import React from 'react';
import Loading from '../Loading';
import './CardList.scss';

const CardList = ({ items, card }) => {
  if (items === null) return <Loading />;
  if (items === undefined) return <div></div>;

  return (
    <ul className="CardList">
      {items.map((item, index) => (
        <li key={index}>{card({ item })}</li>
      ))}
    </ul>
  );
};

export default CardList;
