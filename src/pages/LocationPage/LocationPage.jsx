import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import GET from '../../api';
import Loading from '../../components/Loading';
import Location from './Location';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CardList from '../../components/CardList';
import { PageTitle, SectionTitle } from '../../components/Typo';
import mapUrlsToId from '../../utils/mapUrlsToId';

const LocationPage = (props) => {
  const id = props.match.params.id;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    GET.location(id)
      .then((res) => setLocation(res.data))
      .catch(() => setLocation(undefined));
  }, [id]);

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
  const [residents, setResidents] = useState(null);

  useEffect(() => {
    GET.character(ids)
      .then((res) => setResidents(res.data))
      .catch(() => setResidents(undefined));
  }, [ids]);

  if (!residents) return <div></div>;

  return <CardList items={residents} Component={CharacterCard} />;
};
