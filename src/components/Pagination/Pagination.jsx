import React, { useState, useEffect } from 'react';
import GET from '../../api';
import './Pagination.scss';

const Pagination = ({ type, query, ListComponent }) => {
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const next = () => {
    if (page >= pages) return;
    setPage((prev) => prev + 1);
  };
  const prev = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    GET[type]('?page=' + page + '&' + query)
      .then((res) => {
        setItems(res.data.results);
        setPages(res.data.info.pages);
      })
      .catch(() => setItems(undefined));
  }, [type, page, query]);

  return (
    <div className="Pagination">
      <ListComponent items={items} />
      <button
        disabled={page <= 1}
        style={{ width: 50, height: 20 }}
        onClick={prev}
      >
        {'<-'}
      </button>
      <button
        disabled={page >= pages}
        style={{ width: 50, height: 20 }}
        onClick={next}
      >
        {'->'}
      </button>
    </div>
  );
};

export default Pagination;
