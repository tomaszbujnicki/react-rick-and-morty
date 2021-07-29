import React from 'react';
import LocationCard from '../../components/LocationCard';
import Page from '../../components/Page';

const LocationsPage = () => {
  return (
    <Page title="Locations" CardComponent={LocationCard} api="locations" />
  );
};

export default LocationsPage;
