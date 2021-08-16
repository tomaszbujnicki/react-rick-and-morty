import { useState, useEffect } from 'react';
import GET from '../api';

const useItems = (type, ids) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (
      (Array.isArray(ids) && ids.length > 0) ||
      Number.isInteger(parseInt(ids))
    ) {
      const idArr = Array.isArray(ids) ? ids : [ids];
      GET[type](idArr)
        .then((res) => {
          const data = Array.isArray(res.data) ? res.data : [res.data];
          setItems(data);
        })
        .catch(() => setItems(undefined));
    } else {
      setItems(undefined);
    }
  }, [type, ids]);

  return items;
};

export default useItems;
