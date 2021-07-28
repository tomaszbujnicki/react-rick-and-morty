import React from 'react';
import './CharacterList.scss';
import RotatingCard from '../RotatingCard';
import { Link } from 'react-router-dom';
import Front from './Front';
import Back from './Back';

const ListItem = ({ character }) => {
  return (
    <li key={character.id}>
      <Link className="" to={'/character/' + character.id}>
        <RotatingCard
          front={<Front character={character} />}
          back={<Back character={character} />}
        />
      </Link>
    </li>
  );
};

const CharacterList = ({ characters }) => {
  const listItems = Array.isArray(characters) ? characters : [characters];

  return (
    <ul className="CharacterList">
      {listItems.map((character) => (
        <ListItem character={character} />
      ))}
    </ul>
  );
};

export default CharacterList;
