'use client';
import UnlimitedModel from './UnlimitedModel';
import HomeModelConnections from './HomeModelConnections';
import HomeModelTopBanner from './HomeModelTopBanner';

const HomeContainerModel = () => {
  return (
    <>
      <HomeModelTopBanner />
      <UnlimitedModel />
      <HomeModelConnections />
    </>
  );
};

export default HomeContainerModel;
