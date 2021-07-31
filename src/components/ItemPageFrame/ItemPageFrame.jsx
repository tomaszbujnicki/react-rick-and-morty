import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';

const ItemPageFrame = ({ item, Content }) => {
  if (item === null) return <Loading />;
  if (item === undefined) return <Redirect to="/" />;

  document.title = item.name + ' | Rick and Morty';

  return (
    <>
      <Content item={item} />
    </>
  );
};

export default ItemPageFrame;
