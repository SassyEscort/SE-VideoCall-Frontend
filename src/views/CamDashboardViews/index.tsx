'use client';
import { CamToCamDashboardBanner } from './camMainBanner';
import CamToCamChooseModal from './camChooseModalViews';
import CamConnectinonLevel from './camConnectinonLevelViews';
import { WebcamDashboard } from './webCamDashboard';

export const CamToCamDashboard = () => {
  return (
    <>
      <CamToCamDashboardBanner />
      <WebcamDashboard />
      <CamToCamChooseModal />
      <CamConnectinonLevel />
    </>
  );
};
