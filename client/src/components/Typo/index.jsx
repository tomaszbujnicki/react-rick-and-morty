import React from 'react';
import './style.css';

export const PageTitle = ({ children, style }) => {
  return (
    <>
      <h1 style={style} className="PageTitle">
        {children}
      </h1>
      <hr />
    </>
  );
};

export const SectionTitle = ({ children, style }) => {
  return (
    <>
      <h2 style={style} className="SectionTitle">
        {children}
      </h2>
      <hr />
    </>
  );
};

export const ArticleTitle = ({ children, style }) => {
  return (
    <h3 style={style} className="ArticleTitle">
      {children}
    </h3>
  );
};

export const SubTitle = ({ children, style }) => {
  return (
    <p style={style} className="SubTitle">
      {children}
    </p>
  );
};
