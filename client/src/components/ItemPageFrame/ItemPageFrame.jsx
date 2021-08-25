import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import useSeo from '../../hooks/useSeo';

const ItemPageFrame = ({ item, Content }) => {
  useSeo({ title: item?.name || undefined });
  if (item === null) return <Loading />;
  if (item === undefined) return <Redirect to="/" />;

  return (
    <>
      <Content item={item} />
    </>
  );
};

export default ItemPageFrame;
