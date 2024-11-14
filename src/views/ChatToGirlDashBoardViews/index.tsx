'use client';

import CamToCamDashboardBanner from './videoChatMainBanner';
import CamToCamChooseModal from './chatChooseModalViews';
import CamConnectinonLevel from './chatWhyChooseViews';
import WebcamDashboard from './whyChooseDashboard';
import CamSexExperience from './VideoChatExperienceViews';
import WebcamDashboardBeyond from './whatMakesChatSpecial';
import CamExperienceBanner from './chatExperienceBanner';
import CamPerks from './howVideoChatWorkViews';
import HomeContainer from 'views/guestViews/homePage';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useEffect, useState } from 'react';

export const ChatToGirlDashBoard = () => {
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
