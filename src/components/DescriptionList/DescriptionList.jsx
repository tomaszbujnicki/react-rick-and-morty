import React from 'react';
import './DescriptionList.scss';

export const Item = ({ children }) => {
  return <div className="Item">{children}</div>;
};

export const ItemKey = ({ children }) => {
  return <dt className="Item__key">{children}</dt>;
};

export const ItemValue = ({ children }) => {
  return <dd className="Item__value">{children}</dd>;
};

export const DescriptionList = ({ children }) => {
  return <dl className="DescriptionList">{children}</dl>;
};
