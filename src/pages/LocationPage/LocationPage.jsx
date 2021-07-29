import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/Loading';
import Location from './Location';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToId from '../../utils/mapUrlsToId';
import useItem from '../../hooks/useItem';
import useItems from '../../hooks/useItems';

const LocationPage = (props) => {
  const id = props.match.params.id;
  const location = useItem('location', id);

  if (location === null) {
    return <Loading />;
  }

  if (location === undefined) {
    return <Redirect to="/" />;
  }

  const ids = mapUrlsToId(location.residents);

  const residents =
    ids.length === 0 ? (
      <div>No one lives here.</div>
    ) : (
      <ResidentList ids={ids} />
    );

  return (
    <div>
      <PageTitle>{location.name}</PageTitle>
      <section>
        <Location location={location} />
      </section>
      <section>
        <SectionTitle>Residents:</SectionTitle>
        {residents}
      </section>
    </div>
  );
};

export default LocationPage;

const ResidentList = ({ ids }) => {
  const residents = useItems('character', ids);

  if (!residents) return <div></div>;

  return <CardList items={residents} type="character" />;
};
