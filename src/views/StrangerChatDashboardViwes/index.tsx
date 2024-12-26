import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { getUserDataServerSide } from 'utils/getSessionData';
import HomeContainer from 'views/guestViews/homePage';
import StrangerChatMainDashboard from './StrangerChatMainDashboard';
import StrangerChatVideoCalls from './StrangerChatVideoCalls';
import StrangerCamChat from './StrangerCamChat';
import VideoChatWithStrangers from './VideoChatWithStrangers';
import ChatForFunAndConnection from './ChatForFunAndConnection';
import UltimateVideoChatPlatform from './UltimateVideoChatPlatform';
import TalkToStrangersVideoCall from './TalkToStrangersVideoCall';
import VideoChatDashboard from './VideoChatDashboard';

export const StrangerChatDashboard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
  const session = await getUserDataServerSide();
  const initVal = {
    fromAge: searchParams?.fromAge || '',
    toAge: searchParams?.toAge || '',
    fromPrice: searchParams?.fromPrice || '',
    toPrice: searchParams?.toPrice || '',
    language: searchParams?.language || '',
    isOnline: searchParams?.isOnline || '',
    country: searchParams?.country || '',
    region: searchParams?.region || '',
    sortOrder: searchParams?.sortOrder || '',
    sortField: searchParams?.sortField || '',
    gender: searchParams?.gender || '',
    page: (searchParams?.page && Number(searchParams?.page)) || 1,
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams?.page ?? 1) - 1) * HOME_PAGE_SIZE || 0,
    email: searchParams?.email || ''
  };
  const modelData = await ModelListingService.getModelListing(initVal, session.token);
  const isCustomer = session?.role === ROLE.CUSTOMER;

  return (
    <>
      {isCustomer ? <HomeContainer modelData={modelData} params={initVal} /> : <StrangerChatMainDashboard />}
      <StrangerChatVideoCalls />
      <StrangerCamChat />
      <VideoChatWithStrangers />
      <ChatForFunAndConnection />
      <TalkToStrangersVideoCall />
      <VideoChatDashboard />
      <UltimateVideoChatPlatform isCustomer={isCustomer} />
    </>
  );
};
