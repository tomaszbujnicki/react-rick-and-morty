import React from 'react';
import './ListOfCards.scss';

const ListOfCards = ({ items, Component }) => {
  const itemList = Array.isArray(items) ? items : [items];

  return (
    <ul className="ListOfCards">
      {itemList.map((item) => (
        <li key={item.id}>
          <Component item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfCards;
