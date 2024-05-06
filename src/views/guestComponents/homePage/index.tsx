'use client';

import HomeConnections from './HomeConnections';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';

const HomeContainer = () => {
  return (
    <>
      <HomeTopBanner />
      <HomeImageCard />
      <HomeConnections />
    </>
  );
};

export default HomeContainer;
