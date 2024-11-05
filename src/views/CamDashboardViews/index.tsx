'use client';
import { CamToCamDashboardBanner } from './camMainBanner';
import CamToCamChooseModal from './camChooseModalViews';
import CamConnectinonLevel from './camConnectinonLevelViews';

export const CamToCamDashboard = () => {
  return (
    <>
      <CamToCamDashboardBanner />
      <CamToCamChooseModal />
      <CamConnectinonLevel />
    </>
  );
};
