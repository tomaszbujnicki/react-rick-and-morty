import React from 'react';
import LocationCard from '../../components/LocationCard';
import Page from '../../components/Page';

const LocationsPage = () => {
  return (
    <Page title="Locations" CardComponent={LocationCard} type="location" />
  );
};

export default LocationsPage;
