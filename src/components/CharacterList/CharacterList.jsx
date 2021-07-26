import React from 'react';
import './CharacterList.scss';
import CharacterPreview from './CharacterPreview';

function CharacterList({ characters }) {
  return (
    <ul className="CharacterList">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterPreview character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
