'use client';

import SexChatDashboardBanner from './sexChatMainBanner';
import WhySexChatComponent from './WhySexChatView';
import SexyChatAtFingertips from './SexyChatAtFingertips';
import ExclusiveSexChatDashboard from './ExclusiveSexChatDashboard';
import ReadyOneOnOneComponent from './readyOneOnOne';
import MeetRealPeople from './meetRealPeopleBanner';
import HomeContainer from 'views/guestViews/homePage';
import LiveSexChatDashboard from './LiveSexChat';
import HowSexVideoChatWorks from './HowSexVideoChatWorks';
import { useAuthContext } from 'contexts/AuthContext';

export const SexChatDashBoard = () => {
  const { isCustomer } = useAuthContext();

  return (
    <>
      {isCustomer ? <HomeContainer /> : <SexChatDashboardBanner />}
      <ExclusiveSexChatDashboard />
      <WhySexChatComponent />
      <LiveSexChatDashboard />
      <SexyChatAtFingertips />
      <ReadyOneOnOneComponent />
      <HowSexVideoChatWorks />
      <MeetRealPeople isCustomer={isCustomer} />
    </>
  );
};