'use client';
import { CamToCamDashboardBanner } from './camMainBanner';
import CamToCamChooseModal from './camChooseModalViews';
import CamConnectinonLevel from './camConnectinonLevelViews';
import { WebcamDashboard } from './webCamDashboard';
import CamSexExperience from './camSexExperience';
import { WebcamDashboardBeyond } from './webCamBeyondDashboard';

export const CamToCamDashboard = () => {
  return (
    <>
      <CamToCamDashboardBanner />
      <WebcamDashboard />
      <CamToCamChooseModal />
      <WebcamDashboardBeyond />
      <CamConnectinonLevel />
      <CamSexExperience />
    </>
  );
};
