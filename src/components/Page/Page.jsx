import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import CardList from '../CardList';
import GET from '../../api';
import { PageTitle } from '../Typo';

const Page = ({ title, CardComponent, api }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    GET[api](page)
      .then((res) => setItems(res.data.results))
      .catch(() => setItems(undefined));
  }, [page, api]);

  if (items === undefined) return <div></div>;

  if (items.length === 0) return <Loading />;

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      {items.length === 0 ? (
        <Loading />
      ) : (
        <CardList Component={CardComponent} items={items} />
      )}
    </div>
  );
};

export default Page;
