'use client';

import CamToCamDashboardBanner from './camMainBanner';
import CamToCamChooseModal from './camChooseModalViews';
import CamConnectinonLevel from './camConnectinonLevelViews';
import WebcamDashboard from './webCamDashboard';
import CamSexExperience from './camSexExperienceViews';
import WebcamDashboardBeyond from './webCamBeyondDashboard';
import CamExperienceBanner from './camExperienceBanner';
import CamPerks from './camPerksViews';
import HomeContainer from 'views/guestViews/homePage';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useEffect, useState } from 'react';

export const CamToCamDashboard = () => {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id ?? data.customer_id, token: data.token });
      }
    };
    userToken();
  }, []);

  return (
    <>
      {token.token ? <HomeContainer /> : <CamToCamDashboardBanner />}
      <WebcamDashboard />
      <CamToCamChooseModal />
      <WebcamDashboardBeyond />
      <CamConnectinonLevel />
      <CamSexExperience />
      <CamPerks />
      <CamExperienceBanner token={token.token} />
    </>
  );
};
