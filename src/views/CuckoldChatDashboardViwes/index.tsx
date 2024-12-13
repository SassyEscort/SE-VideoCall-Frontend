import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { getUserDataServerSide } from 'utils/getSessionData';
import HomeContainer from 'views/guestViews/homePage';
import CuckoldChatMainDashboard from './CuckoldChatMainDashboard';
import CuckoldChatVideoCalls from './CuckoldChatVideoCalls';
import CuckoldChat from './CuckoldChat';
import VideoChatWithCuckold from './VideoChatWithCuckold';
import CuckoldChatForFunAndConnection from './CuckoldChatForFunAndConnection';
import TalkToCuckoldVideoCall from './TalkToCuckoldVideoCall';
import VideoChatCuckoldDashboard from './VideoChatCuckoldDashboard';
import UltimateVideoChatCuckoldPlatform from './UltimateVideoChatCuckoldPlatform';

export const CuckoldChatDashboard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
  const session = await getUserDataServerSide();
  const initVal = {
    fromAge: searchParams?.fromAge || '',
    toAge: searchParams?.toAge || '',
    fromPrice: searchParams?.fromPrice || '',
    toPrice: searchParams?.toPrice || '',
    language: searchParams?.language || '',
    isOnline: searchParams?.isOnline || '',
    country: searchParams?.country || '',
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
      {isCustomer ? <HomeContainer modelData={modelData} params={initVal} /> : <CuckoldChatMainDashboard />}
      <CuckoldChatVideoCalls />
      <CuckoldChat />
      <VideoChatWithCuckold />
      <CuckoldChatForFunAndConnection />
      <TalkToCuckoldVideoCall />
      <VideoChatCuckoldDashboard />
      <UltimateVideoChatCuckoldPlatform isCustomer={isCustomer} />
    </>
  );
};
