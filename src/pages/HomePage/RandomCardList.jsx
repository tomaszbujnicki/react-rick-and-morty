import React, { useState, useEffect } from 'react';
import GET from '../../api';
import CardList from '../../components/CardList';
import getRandomNumbers from '../../utils/getRandomNumber';
import useItems from '../../hooks/useItems';

const RandomCardList = ({ type, count = 4 }) => {
  const [ids, setIds] = useState(null);
  const items = useItems(type, ids);

  useEffect(() => {
    GET[type]()
      .then((res) => {
        const maxCount = res.data.info.count;
        setIds(getRandomNumbers(maxCount, count));
      })
      .catch(() => setIds(undefined));
  }, [type, count]);

  return <CardList items={items} type={type} />;
};

export default RandomCardList;
