'use client';
import UnlimitedModel from './UnlimitedModel';
import HomeModelConnections from './HomeModelConnections';
import HomeModelTopBanner from './HomeModelTopBanner';
import HomeModelFAQ from './HomeModelFAQ';
import HomeModelBottomBanner from './HomeModelBottomBanner';
const HomeContainerModel = () => {
  return (
    <>
      <HomeModelTopBanner />
      <HomeModelConnections />
      <UnlimitedModel />
      <HomeModelFAQ />
      <HomeModelBottomBanner />
    </>
  );
};

export default HomeContainerModel;
