import React from 'react';
import './DescriptionList.scss';

const DescriptionList = ({ children, style }) => {
  return <dl style={style}>{children}</dl>;
};

export default DescriptionList;
