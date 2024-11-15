'use client';

import VideoChatDashboardBanner from './videoChatMainBanner';
import WhyChatChooseModal from './chatChooseModalViews';
import StartYourVideoChatLevel from './startVideoChatViews';
import WhyChooseDashboard from './whyChooseDashboard';
import VideoChatExperience from './VideoChatExperienceViews';
import WhySpecialDashboardBeyond from './whatMakesChatSpecial';
import VideoChatExperienceBanner from './chatExperienceBanner';
import HowChatWorks from './howVideoChatWorkViews';
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
      {token.token ? <HomeContainer /> : <VideoChatDashboardBanner />}
      <WhyChooseDashboard />
      <WhyChatChooseModal />
      <WhySpecialDashboardBeyond />
      <StartYourVideoChatLevel />
      <VideoChatExperience />
      <HowChatWorks />
      <VideoChatExperienceBanner token={token.token} />
    </>
  );
};
