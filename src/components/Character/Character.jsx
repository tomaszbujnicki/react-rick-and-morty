import React from 'react';
import {
  DescriptionList,
  Item,
  ItemKey,
  ItemValue,
} from '../DescriptionList/DescriptionList';
import './Character.scss';

const Character = ({ character }) => {
  return (
    <div className="Character">
      <div className="Character__content">
        <img className="Character__image" src={character.image} alt="" />
      </div>
      <div className="Character__content">
        <h1 className="Character__title">{character.name}</h1>
        <DescriptionList>
          <Item>
            <ItemKey>Species</ItemKey>
            <ItemValue>{character.species}</ItemValue>
          </Item>
          <Item>
            <ItemKey>Gender</ItemKey>
            <ItemValue>{character.gender}</ItemValue>
          </Item>
          <Item>
            <ItemKey>Status</ItemKey>
            <ItemValue>{character.status}</ItemValue>
          </Item>
          <Item>
            <ItemKey>Origin</ItemKey>
            <ItemValue>{character.origin.name}</ItemValue>
          </Item>
          <Item>
            <ItemKey>Location</ItemKey>
            <ItemValue>{character.location.name}</ItemValue>
          </Item>
        </DescriptionList>
      </div>
    </div>
  );
};

export default Character;
