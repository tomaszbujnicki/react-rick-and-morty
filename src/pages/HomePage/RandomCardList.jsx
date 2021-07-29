import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import GET from '../../api';
import CardList from '../../components/CardList';
import getRandomNumbers from '../../utils/getRandomNumber';
import useItems from '../../hooks/useItems';

const RandomCardList = ({ type = 'character', count = 4 }) => {
  const [ids, setIds] = useState([]);
  const items = useItems(type, ids);

  useEffect(() => {
    GET[type + 's']()
      .then((res) => {
        const maxCount = res.data.info.count;
        setIds(getRandomNumbers(maxCount, count));
      })
      .catch(() => setIds(undefined));
  }, [type, count]);

  if (!items) return <div></div>;

  return (
    <div>
      {items.length ? <CardList items={items} type={type} /> : <Loading />}
    </div>
  );
};

export default RandomCardList;
