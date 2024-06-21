'use client';
import { useEffect, useState } from 'react';
import SearchFilters from '../searchPage/searchFilters';
import HomeConnections from './HomeConnections';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';
import { ModelHomeListing, ModelListingService } from 'services/modelListing/modelListing.services';
import { HomePageMainContainer } from './Home.styled';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';

const HomeContainer = () => {
  const [modelListing, setModelListing] = useState<ModelHomeListing[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };

    userToken();
  }, []);

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
        <HomeImageCard modelListing={modelListing} isFavPage={false} token={token} />
        <HomeConnections />
        {/* <HomePageFAQ /> */}
      </HomePageMainContainer>
    </>
  );
};

export default HomeContainer;
