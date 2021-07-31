import React, { useState, useEffect } from 'react';
import GET from '../../api';
import CardList from '../../components/CardList';
import getRandomNumbers from '../../utils/getRandomNumber';

const RandomCardList = ({ type = 'character', count = 4 }) => {
  const [ids, setIds] = useState(null);

  useEffect(() => {
    GET[type]()
      .then((res) => {
        const maxCount = res.data.info.count;
        setIds(getRandomNumbers(maxCount, count));
      })
      .catch(() => setIds(undefined));
  }, [type, count]);

  return <CardList ids={ids} type={type} />;
};

export default RandomCardList;
