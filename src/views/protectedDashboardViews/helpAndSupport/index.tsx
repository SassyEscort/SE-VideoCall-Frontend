'use client';
import React, { useState } from 'react';
import DashboardProfile from '..';
import HelpAndSupportContainer from './HelpAndSupportContainer';

const HelpAndSupport = () => {
  const [open, setIsOpen] = useState(false);

  const openDailog = () => {
    setIsOpen(true);
  };

  const closeDailog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DashboardProfile>
        <HelpAndSupportContainer open={open} openDailog={openDailog} closeDailog={closeDailog} />
      </DashboardProfile>
    </>
  );
};

export default HelpAndSupport;
