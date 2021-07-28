import React from 'react';
import './CardList.scss';

const CardList = ({ items, Component }) => {
  const itemList = Array.isArray(items) ? items : [items];

  return (
    <ul className="CardList">
      {itemList.map((item) => (
        <li key={item.id}>
          <Component item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
