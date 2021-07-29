import { useState, useEffect } from 'react';
import GET from '../api';

const useItem = (type, id) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    GET[type](id)
      .then((res) => setItem(res.data))
      .catch(() => setItem(undefined));
  }, [type, id]);

  return item;
};

export default useItem;
