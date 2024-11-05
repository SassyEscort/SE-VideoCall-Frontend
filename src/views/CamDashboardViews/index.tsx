'use client';
import { CamToCamDashboardBanner } from './camMainBanner';
import { WebcamDashboard } from './webCamDashboard';

export const CamToCamDashboard = () => {
  return (
    <>
      <CamToCamDashboardBanner />
      <WebcamDashboard />
    </>
  );
};
