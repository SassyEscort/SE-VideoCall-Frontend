'use client';

import CamToCamDashboardBanner from './camMainBanner';
import CamToCamChooseModal from './camChooseModalViews';
import CamConnectinonLevel from './camConnectinonLevelViews';
import WebcamDashboard from './webCamDashboard';
import CamSexExperience from './camSexExperienceViews';
import WebcamDashboardBeyond from './webCamBeyondDashboard';
import CamExperienceBanner from './camExperienceBanner';
import CamPerks from './camPerksViews';

export const CamToCamDashboard = () => (
  <>
    <CamToCamDashboardBanner />
    <WebcamDashboard />
    <CamToCamChooseModal />
    <WebcamDashboardBeyond />
    <CamConnectinonLevel />
    <CamSexExperience />
    <CamPerks />
    <CamExperienceBanner />
  </>
);
