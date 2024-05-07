'use client';
import SearchFilters from '../searchPage/searchFilters';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';

const HomeContainer = () => {
  return (
    <>
      <HomeTopBanner />
      <SearchFilters />
      <HomeImageCard />
    </>
  );
};

export default HomeContainer;
