import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className="Header">
      <Link className="Header__logo" to={'/'}>
        <img src={logo} alt="" width="50" height="50" />
      </Link>
      <h2 className="Header__title">Rick and Morty</h2>
    </header>
  );
};

export default Header;
