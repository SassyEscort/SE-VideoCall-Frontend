'use client';
import CamToCamDashboardBanner from './camMainBanner';
import CamToCamChooseModal from './camChooseModalViews';
import CamConnectionLevel from './camConnectinonLevelViews';
import WebcamDashboard from './webCamDashboard';
import CamSexExperience from './camSexExperienceViews';
import WebcamDashboardBeyond from './webCamBeyondDashboard';
import CamExperienceBanner from './camExperienceBanner';
import CamPerks from './camPerksViews';
import HomeContainer from 'views/guestViews/homePage';
import { useAuthContext } from 'contexts/AuthContext';

export const CamToCamDashboard = () => {
  const { isCustomer } = useAuthContext();

  return (
    <>
      {isCustomer ? <HomeContainer /> : <CamToCamDashboardBanner />}
      <WebcamDashboard />
      <CamToCamChooseModal />
      <WebcamDashboardBeyond />
      <CamConnectionLevel />
      <CamSexExperience />
      <CamPerks />
      <CamExperienceBanner isCustomer={isCustomer} />
    </>
  );
};
