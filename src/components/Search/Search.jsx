import React, { useState } from 'react';
import GET from '../../api';
import './Search.scss';

const Search = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState('character');
  const [parameter, setParameter] = useState('name');

  const saveText = (e) => {
    setText(e.target.value);
  };

  const saveSelect = (e) => {
    setParameter(e.target.value.replace(/\w+\|/, ''));
    setType(e.target.value.replace(/\|\w+/, ''));
  };

  const find = (e) => {
    e.preventDefault();
    GET[type](`?${parameter}=${text}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setText('');
  };

  return (
    <form className="Search" onSubmit={find}>
      <input
        className="Search__input"
        value={text}
        onChange={saveText}
        placeholder="Search..."
      />

      <select className="Search__dataList" onChange={saveSelect}>
        <option className="Search__option" value={'character|name'}>
          character by name
        </option>
        <option className="Search__option" value={'character|species'}>
          character by species
        </option>
        <option className="Search__option" value={'location|name'}>
          location by name
        </option>
        <option className="Search__option" value={'location|type'}>
          location by type
        </option>
        <option className="Search__option" value={'location|dimension'}>
          location by dimension
        </option>
        <option className="Search__option" value={'episode|name'}>
          episode by name
        </option>
        <option className="Search__option" value={'episode|code'}>
          episode by code
        </option>
      </select>

      <input className="Search__button" type="submit" value="Find!" />
    </form>
  );
};

export default Search;
