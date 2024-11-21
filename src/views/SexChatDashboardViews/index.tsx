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
import { useAuthContext } from '../../../context/AuthContext';

export const SexChatDashBoard = () => {
  const { isCustomer } = useAuthContext();

  return (
    <>
      {isCustomer ? <HomeContainer /> : <VideoChatDashboardBanner />}
      <WhyChooseDashboard />
      <WhyChatChooseModal />
      <WhySpecialDashboardBeyond />
      <StartYourVideoChatLevel />
      <VideoChatExperience />
      <HowChatWorks />
      <VideoChatExperienceBanner isCustomer={isCustomer} />
    </>
  );
};
