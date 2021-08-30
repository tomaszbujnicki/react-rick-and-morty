import React, { useEffect, useState } from 'react';
import './ToggleTheme.scss';

const darkTheme = {
  'background': '#121212',
  'surface': '#1e1e1e',
  'primary': '#11d811',
  'on-background': '#ffffff',
  'on-surface': '#ffffff',
  'on-primary': '#000000',
  'highlighted-surface': '#3e3e3e',
};

const lightTheme = {
  'background': '#ffffff',
  'surface': '#3e3e3e',
  'primary': '#11d811',
  'on-background': '#000000',
  'on-surface': '#ffffff',
  'on-primary': '#000000',
  'highlighted-surface': '#000000',
};

const ToggleTheme = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === darkTheme ? lightTheme : darkTheme));
    const icons = document.querySelectorAll('.ToggleTheme__icon');
    icons.forEach((icon) => icon.classList.toggle('hide'));
  };

  useEffect(() => {
    const root = document.documentElement;
    for (const key in theme) {
      const value = theme[key];
      root.style.setProperty('--' + key, value);
    }
  }, [theme]);

  return (
    <button className="ToggleTheme" onClick={toggleTheme}>
      <span className="ToggleTheme__icon">🌜</span>
      <span className="ToggleTheme__icon hide">🌞</span>
    </button>
  );
};

export default ToggleTheme;
