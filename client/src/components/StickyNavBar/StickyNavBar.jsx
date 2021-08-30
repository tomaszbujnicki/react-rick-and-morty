import React from 'react';
import './StickyNavBar.scss';
import { Link } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme';
import logo from './logo.svg';
import SearchBar from '../SearchBar';

const StickyNavBar = () => {
  return (
    <nav className="StickyNavBar">
      <Link className="StickyNavBar__logo" to={'/'}>
        <img src={logo} alt="" width="50" height="50" />
      </Link>
      <SearchBar />
      <ToggleTheme />
    </nav>
  );
};

export default StickyNavBar;
