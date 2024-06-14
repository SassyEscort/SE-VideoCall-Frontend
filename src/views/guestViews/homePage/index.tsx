'use client';
import { useEffect, useState } from 'react';
import SearchFilters from '../searchPage/searchFilters';
import HomeConnections from './HomeConnections';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';
import { ModelHomeListing, ModelListingService } from 'services/modelListing/modelListing.services';

const HomeContainer = () => {
  const [modelListing, setModelListing] = useState<ModelHomeListing[]>([]);

  const getModelListing = async () => {
    const getModel = await ModelListingService.getModelListing();
    setModelListing(getModel.model_details);
  };

  useEffect(() => {
    getModelListing();
  }, []);

  return (
    <>
      <HomeTopBanner />
      <SearchFilters />
      <HomeImageCard modelListing={modelListing} />
      <HomeConnections />
      {/* <HomePageFAQ /> */}
    </>
  );
};

export default HomeContainer;
