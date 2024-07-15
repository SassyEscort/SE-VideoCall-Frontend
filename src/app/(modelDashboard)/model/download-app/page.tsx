import React from 'react';
import DashboardProfile from 'views/protectedDashboardViews';
import DownloadApp from 'views/protectedDashboardViews/downlaoApp';

const page = () => {
  return (
    <>
      <DashboardProfile>
        <DownloadApp />
      </DashboardProfile>
    </>
  );
};

export default page;
