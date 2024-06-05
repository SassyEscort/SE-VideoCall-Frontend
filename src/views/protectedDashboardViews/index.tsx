'use client';
import React, { ReactNode } from 'react';
import MainLayoutNav from './protectedDashboardLayout';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import DashboardContainer from './dashboardNavbar/DashboardContainer';

const DashboardProfile = ({ children, modelDetails }: { children: ReactNode; modelDetails?: ModelDetailsResponse }) => {
  return (
    <>
      <DashboardContainer>
        <MainLayoutNav variant={'worker'} enlargedFooter={true} modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}>
          {children}
        </MainLayoutNav>
      </DashboardContainer>
    </>
  );
};

export default DashboardProfile;
