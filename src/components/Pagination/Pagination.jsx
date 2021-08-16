import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination = ({ page, pageCount, route }) => {
  const links = [];
  for (let i = 1; i <= pageCount; i++) {
    links.push(
      <li key={i}>
        <Link
          to={route + i}
          className={`Pagination__element ${i === page ? 'active' : ''}`}
        >
          {i}
        </Link>
      </li>
    );
  }
  const prev = (
    <li key="prev">
      {page > 1 ? (
        <Link to={route + (page - 1)} className="Pagination__element">
          {'<'}
        </Link>
      ) : (
        <Link
          onClick={(e) => e.preventDefault()}
          to={''}
          className="Pagination__element disabled"
        >
          {'<'}
        </Link>
      )}
    </li>
  );
  const next = (
    <li key="next">
      {page < pageCount ? (
        <Link to={route + (page + 1)} className="Pagination__element">
          {'>'}
        </Link>
      ) : (
        <Link
          onClick={(e) => e.preventDefault()}
          to={''}
          className="Pagination__element disabled"
        >
          {'>'}
        </Link>
      )}
    </li>
  );

  return (
    <ul className="Pagination">
      {prev}
      {links}
      {next}
    </ul>
  );
};

export default Pagination;
