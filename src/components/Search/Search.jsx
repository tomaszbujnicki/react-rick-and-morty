import React, { useEffect, useState } from 'react';
import './Search.scss';

const Search = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState('character');

  const saveText = (e) => {
    setText(e.target.value);
  };

  const saveType = (e) => {
    setType(e.target.value);
  };

  const find = (e) => {
    e.preventDefault();
    console.log(text, type);
    setText('');
  };

  return (
    <form className="Search" onSubmit={find}>
      <select className="Search__dataList" value={type} onChange={saveType}>
        <option className="Search__option" value="character">
          character
        </option>
        <option className="Search__option" value="location">
          location
        </option>
        <option className="Search__option" value="episode">
          episode
        </option>
      </select>
      <input
        className="Search__input"
        value={text}
        onChange={saveText}
        placeholder="Search"
      />
      <input className="Search__button" type="submit" value="Find!" />
    </form>
  );
};

export default Search;
