import { useState, useEffect } from 'react';
import GET from '../api';

const useItems = (type, ids) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (!ids) {
      setItems(undefined);
      return;
    }
    const idArr = Array.isArray(ids) ? ids : [ids];
    GET[type](idArr)
      .then((res) => setItems(res.data))
      .catch(() => setItems(undefined));
  }, [type, ids]);

  return items;
};

export default useItems;
