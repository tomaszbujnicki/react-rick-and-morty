import React, { useState } from 'react';
import Loading from '../Loading';
import CardList from '../CardList';
import { PageTitle } from '../Typo';
import useItems from '../../hooks/useItems';

const Page = ({ title, type }) => {
  const [arr, setArr] = useState(['1', '2', '3']);
  const items = useItems(type, arr);

  if (items === undefined) return <div>und</div>;

  if (items === null) return <Loading />;

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <section>
        {items.length === 0 ? (
          <Loading />
        ) : (
          <CardList type={type} items={items} />
        )}
      </section>
    </div>
  );
};

export default Page;
