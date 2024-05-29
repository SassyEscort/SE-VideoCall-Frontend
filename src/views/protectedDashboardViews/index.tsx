'use client';
import React, { ReactNode } from 'react';
import MainLayoutNav from './protectedDashboardLayout';

const DashboardProfile = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainLayoutNav variant={'worker'} enlargedFooter={true}>
        {children}
      </MainLayoutNav>
    </>
  );
};

export default DashboardProfile;
