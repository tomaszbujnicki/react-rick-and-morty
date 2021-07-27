import React from 'react';
import './CharacterList.scss';
import RotatingCard from '../RotatingCard';
import { Link } from 'react-router-dom';
import Front from './Front';
import Back from './Back';

const CharacterList = ({ characters }) => {
  return (
    <ul className="CharacterList">
      {characters.map((character) => (
        <li key={character.id}>
          <Link className="" to={'/character/' + character.id}>
            <RotatingCard
              front={<Front character={character} />}
              back={<Back character={character} />}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
