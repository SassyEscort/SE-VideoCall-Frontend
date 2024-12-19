import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { getUserDataServerSide } from 'utils/getSessionData';
import HomeContainer from 'views/guestViews/homePage';
import LesbianChatMainDashboard from './LesbianChatMainDashboard';
import LesbianChatVideoCalls from './LesbianChatVideoCalls';
import LesbianChat from './LesbianChat';
import VideoChatWithLesbian from './VideoChatWithLesbian';
import LesbianChatForFunAndConnection from './LesbianChatForFunAndConnection';
import TalkToLesbianVideoCall from './TalkToLesbianVideoCall';
import VideoChatLesbianDashboard from './VideoChatLesbianDashboard';
import UltimateVideoChatLesbianPlatform from './UltimateVideoChatLesbianPlatform';

export const LesbianChatDashboard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
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
      {isCustomer ? <HomeContainer modelData={modelData} params={initVal} /> : <LesbianChatMainDashboard />}
      <LesbianChatVideoCalls />
      <LesbianChat />
      <VideoChatWithLesbian />
      <LesbianChatForFunAndConnection />
      <TalkToLesbianVideoCall />
      <VideoChatLesbianDashboard />
      <UltimateVideoChatLesbianPlatform isCustomer={isCustomer} />
    </>
  );
};
