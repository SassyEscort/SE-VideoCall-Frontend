'use client';

import { useAuthContext } from 'contexts/AuthContext';
import HomeContainer from 'views/guestViews/homePage';
import DirtyTalksMainBanner from './DirtyTalksMainBanner';
import DirtyHottestTalksDashboard from './DirtyHottestTalksDashboard';
import DirtyChatExperienceDashboard from './DirtyChatExperienceDashboard';
import DirtyCamToCamChatsDashboard from './DirtyCamToCamChatsDashboard';
import DirtyCamChatsDashboard from './DirtyCamChatsDashboard';
import DirtyCamsUniqueDashboard from './DirtyCamsUniqueDashboard';
import DirtyWebcamsFingertips from './DirtyWebcamsFingertips';
import EnjoyDirtyCams from './EnjoyDirtyCams';

export const DirtyTalksDashBoard = () => {
  const { isCustomer } = useAuthContext();

  return (
    <>
      {isCustomer ? <HomeContainer /> : <DirtyTalksMainBanner />}
      <DirtyHottestTalksDashboard />
      <DirtyChatExperienceDashboard />
      <DirtyCamToCamChatsDashboard />
      <DirtyCamChatsDashboard />
      <DirtyWebcamsFingertips />
      <DirtyCamsUniqueDashboard />
      <EnjoyDirtyCams isCustomer={isCustomer} />
    </>
  );
};
