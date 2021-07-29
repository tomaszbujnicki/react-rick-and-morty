import React from 'react';
import './EpisodeCard.scss';
import { Link } from 'react-router-dom';
import Card from './../Card';
import { ArticleTitle } from '../Typo';

const EpisodeCard = ({ item }) => {
  return (
    <Link to={'/episode/' + item.id}>
      <Card>
        <div className="EpisodeCard">
          <header>
            <ArticleTitle style={{ 'textAlign': 'center' }}>
              {item.name}
            </ArticleTitle>
            <hr className="EpisodeCard__line"></hr>
          </header>

          <dl className="EpisodeCard__list">
            <div className="EpisodeCard__item">
              <dt className="EpisodeCard__key">Date</dt>
              <dd className="EpisodeCard__value">{item.air_date}</dd>
            </div>
            <div className="EpisodeCard__item">
              <dt className="EpisodeCard__key">Code</dt>
              <dd className="EpisodeCard__value">{item.episode}</dd>
            </div>
            <div className="EpisodeCard__item">
              <dt className="EpisodeCard__key">Characters</dt>
              <dd className="EpisodeCard__value">{item.characters.length}</dd>
            </div>
          </dl>
        </div>
      </Card>
    </Link>
  );
};

export default EpisodeCard;
