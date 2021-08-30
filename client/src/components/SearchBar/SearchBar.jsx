import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = (props) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('character');
  const [parameter, setParameter] = useState('name');
  const [isOpen, setIsOpen] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const saveText = (e) => {
    setText(e.target.value);
  };

  const saveSelect = (e) => {
    setParameter(e.target.value.replace(/\w+\|/, ''));
    setType(e.target.value.replace(/\|\w+/, ''));
  };

  const find = (e) => {
    e.preventDefault();
    document.querySelector('.SearchBar__input').focus();
    props.history.push(`/search/${type}/${parameter}/${text}`);
    setText('');
  };

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsOpen(false);
        setIsFull(false);
      }
    }, 0);
  };

  const show = () => {
    setIsFull(true);
    setIsOpen(true);
    window.setTimeout(() =>
      document.querySelector('.SearchBar__input').focus()
    );
  };

  return (
    <>
      <button className="SearchBar__icon" onClick={show}>
        🔍
      </button>
      <form
        className={`SearchBar ${isFull ? 'full' : ''}`}
        onSubmit={find}
        onBlur={handleBlur}
      >
        <input
          className="SearchBar__input"
          value={text}
          onChange={saveText}
          onFocus={() => setIsOpen(true)}
          placeholder="Search..."
        />

        <select
          className={`SearchBar__dataList ${isOpen ? '' : 'hide'}`}
          onChange={saveSelect}
        >
          <option className="SearchBar__option" value={'character|name'}>
            character by name
          </option>
          <option className="SearchBar__option" value={'character|species'}>
            character by species
          </option>
          <option className="SearchBar__option" value={'location|name'}>
            location by name
          </option>
          <option className="SearchBar__option" value={'location|type'}>
            location by type
          </option>
          <option className="SearchBar__option" value={'location|dimension'}>
            location by dimension
          </option>
          <option className="SearchBar__option" value={'episode|name'}>
            episode by name
          </option>
          <option className="SearchBar__option" value={'episode|episode'}>
            episode by code
          </option>
        </select>

        <input
          className={`SearchBar__button ${isOpen ? '' : 'hide'}`}
          type="submit"
          value="Find!"
        />
      </form>
    </>
  );
};

export default withRouter(SearchBar);
