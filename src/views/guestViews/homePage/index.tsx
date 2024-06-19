'use client';
import { useEffect, useState } from 'react';
import SearchFilters from '../searchPage/searchFilters';
import HomeConnections from './HomeConnections';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';
import { ModelHomeListing, ModelListingService } from 'services/modelListing/modelListing.services';
import { HomePageMainContainer } from './Home.styled';

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
      <HomePageMainContainer>
        <HomeTopBanner />
        <SearchFilters />
        <HomeImageCard modelListing={modelListing} />
        <HomeConnections />
        {/* <HomePageFAQ /> */}
      </HomePageMainContainer>
    </>
  );
};

export default HomeContainer;
