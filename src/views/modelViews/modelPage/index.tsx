'use client';
import React from 'react';
import UnlimitedModel from './UnlimitedModel';
import HomeModelConnections from './HomeModelConnections';
import HomeModelTopBanner from './HomeModelTopBanner';
import HomeModelFAQ from './HomeModelFAQ';
const HomeContainerModel = () => {
  return (
    <>
      <HomeModelTopBanner />
      <HomeModelConnections />
      <UnlimitedModel />
      <HomeModelFAQ />
      {/* <HomeModelBottomBanner /> */}
    </>
  );
};

export default HomeContainerModel;
