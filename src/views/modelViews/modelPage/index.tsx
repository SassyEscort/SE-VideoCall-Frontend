'use client';
import HomeModelConnections from './HomeModelConnections';
import HomeModelTopBanner from './HomeModelTopBanner';
import HomeModelFAQ from './HomeModelFAQ';
import HomeModelBottomBanner from './HomeModelBottomBanner';
const HomeContainerModel = () => {
  return (
    <>
      <HomeModelTopBanner />
      <HomeModelConnections />
      <HomeModelFAQ />
      <HomeModelBottomBanner />
    </>
  );
};

export default HomeContainerModel;
