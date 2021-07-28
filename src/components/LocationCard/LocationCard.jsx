import React from 'react';
import './LocationCard.scss';
import { Link } from 'react-router-dom';
import Card from './../Card';
import { ArticleTitle } from '../Typo';

const LocationCard = ({ item }) => {
  console.log(item);
  return (
    <Link to={'/location/' + item.id}>
      <Card>
        <div className="LocationCard">
          <header>
            <ArticleTitle style={{ 'text-align': 'center' }}>
              {item.name}
            </ArticleTitle>
            <hr className="LocationCard__line"></hr>
          </header>

          <dl className="LocationCard__list">
            <div className="LocationCard__item">
              <dt className="LocationCard__key">Type</dt>
              <dd className="LocationCard__value">{item.type}</dd>
            </div>
            <div className="LocationCard__item">
              <dt className="LocationCard__key">Dimension</dt>
              <dd className="LocationCard__value">{item.dimension}</dd>
            </div>
            <div className="LocationCard__item">
              <dt className="LocationCard__key">Residents</dt>
              <dd className="LocationCard__value">{item.residents.length}</dd>
            </div>
          </dl>
        </div>
      </Card>
    </Link>
  );
};

export default LocationCard;
