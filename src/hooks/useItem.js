import { useState, useEffect } from 'react';
import GET from '../api';

const useItem = (type, id) => {
  const [item, setItem] = useState(null);
  console.log('useItem 1: ' + item);
  useEffect(() => {
    GET[type](id)
      .then((res) => setItem(res.data))
      .catch(() => setItem(undefined));
  }, [type, id]);
  console.log('useItem 2: ' + item);
  return item;
};

export default useItem;
