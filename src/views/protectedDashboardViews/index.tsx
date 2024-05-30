'use client';
import React, { ReactNode } from 'react';
import MainLayoutNav from './protectedDashboardLayout';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';

const DashboardProfile = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HomeMainModelContainer>
        <MainLayoutNav variant={'worker'} enlargedFooter={true}>
          {children}
        </MainLayoutNav>
      </HomeMainModelContainer>
    </>
  );
};

export default DashboardProfile;
