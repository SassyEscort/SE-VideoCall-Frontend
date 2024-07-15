'use client';
import React, { ReactNode } from 'react';
import MainLayoutNav from './protectedDashboardLayout';

import DashboardContainer from './dashboardNavbar/DashboardContainer';

const DashboardProfile = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DashboardContainer>
        <MainLayoutNav variant={'worker'} enlargedFooter={true}>
          {children}
        </MainLayoutNav>
      </DashboardContainer>
    </>
  );
};

export default DashboardProfile;
