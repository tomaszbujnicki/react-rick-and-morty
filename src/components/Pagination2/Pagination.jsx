import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination = ({ page, pageCount, route }) => {
  return (
    <div className="Pagination">
      <Link
        key="1"
        to={route + (page - 1)}
        style={{
          width: 50,
          height: 20,
          display: 'block',
          border: 'solid 1px var(--green)',
          textAlign: 'center',
          backgroundColor: page <= 1 ? 'var(--highlighted-surface)' : 'inherit',
        }}
      >
        {'<-'}
      </Link>
      <Link
        key="2"
        to={route + (page + 1)}
        style={{
          width: 50,
          height: 20,
          display: 'block',
          border: 'solid 1px var(--green)',
          textAlign: 'center',
          backgroundColor:
            page >= pageCount ? 'var(--highlighted-surface)' : 'inherit',
        }}
      >
        {'->'}
      </Link>
    </div>
  );
};

export default Pagination;
