import React from 'react';
import Loading from '../Loading';
import './CardList.scss';

const CardList = ({ items, card }) => {
  if (items === null) return <Loading />;
  if (items === undefined) return <div></div>;

  const itemList = Array.isArray(items) ? items : [items];

  return (
    <ul className="CardList">
      {itemList.map((item) => (
        <li key={item.id}>{card({ item })}</li>
      ))}
    </ul>
  );
};

export default CardList;
