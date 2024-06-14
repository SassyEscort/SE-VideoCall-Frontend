'use client';
import SearchFilters from '../searchPage/searchFilters';
import HomeConnections from './HomeConnections';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';

const HomeContainer = () => {
  return (
    <>
      <HomeTopBanner />
      <SearchFilters />
      <HomeImageCard />
      <HomeConnections />
      {/* <HomePageFAQ /> */}
    </>
  );
};

export default HomeContainer;
