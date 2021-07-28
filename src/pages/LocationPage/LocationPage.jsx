import React, { useState, useEffect } from 'react';
import './LocationPage.scss';
import { Redirect } from 'react-router-dom';
import GET from '../../api';
import Loading from '../../components/Loading';
import Location from './Location';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import ListOfCards from '../../components/ListOfCards';

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

  const ids = getIds(location.residents);

  return (
    <div className="LocationPage">
      <Location location={location} />
      {ids.length > 0 && <ResidentList ids={ids} />}
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

  console.log(residents);

  if (residents === null) return <div></div>;

  if (residents === undefined) return <div></div>;

  if (residents === []) return <div>No residents in this location.</div>;

  return (
    <div className="LocationPage__residents">
      <h2>Residents:</h2>
      <ListOfCards items={residents} Component={CharacterCard} />
    </div>
  );
};

const getIds = (urlArr) => {
  const urlBase = 'https://rickandmortyapi.com/api/character/';
  const idArr = urlArr.map((url) => url.replace(urlBase, ''));
  return idArr;
};
