'use client';

import HomeConnections from './HomeConnections';
import HomePageFAQ from './HomePageFAQ/HomePageFAQ';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';

const HomeContainer = () => {
  return (
    <>
      <HomeTopBanner />
      <HomeImageCard />
      <HomeConnections />
      <HomePageFAQ />
    </>
  );
};

export default HomeContainer;
