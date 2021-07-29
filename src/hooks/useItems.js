import { useState, useEffect } from 'react';
import GET from '../api';

const useItems = (type, ids) => {
  const [items, setItems] = useState(null);
  console.log(ids);

  useEffect(() => {
    if (
      (Array.isArray(ids) && ids.length > 0) ||
      Number.isInteger(parseInt(ids))
    ) {
      const idArr = Array.isArray(ids) ? ids : [ids];
      GET[type](idArr)
        .then((res) => setItems(res.data))
        .catch(() => setItems(undefined));
    } else {
      console.log('nope');
      setItems(undefined);
    }
  }, [type, ids]);

  return items;
};

export default useItems;
