'use client';
import React, { ReactNode } from 'react';
import MainLayoutNav from './protectedDashboardLayout';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

const DashboardProfile = ({ children, modelDetails }: { children: ReactNode; modelDetails: ModelDetailsResponse }) => {
  return (
    <>
      <HomeMainModelContainer>
        <MainLayoutNav variant={'worker'} enlargedFooter={true} modelDetails={modelDetails}>
          {children}
        </MainLayoutNav>
      </HomeMainModelContainer>
    </>
  );
};

export default DashboardProfile;
