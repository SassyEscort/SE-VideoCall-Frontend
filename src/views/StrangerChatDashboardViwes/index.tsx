import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingRes, ModelListingService } from 'services/modelListing/modelListing.services';
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
import { CarousalModelImageRes, ABTestServices } from 'services/abTest/abTest.services';
import { cookies } from 'next/headers';
import PreSignUpWeb from 'views/guestViews/abTestComponent/preSignUpWeb';

export const StrangerChatDashboard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
  const session = await getUserDataServerSide();
  const cookieStore = await cookies();
  const group = cookieStore.get('ab-group')?.value || '{}';
  let versionDetails = (group && JSON.parse(group)) || {};

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
  let modelData: ModelListingRes = {
    model_details: [],
    aggregate: {
      offset: 0,
      page_size: 0,
      total_rows: 0
    }
  };
  let isCustomer = false;
  let carousalImages: CarousalModelImageRes[] = [];
  try {
    modelData = await ModelListingService.getModelListing(initVal, session.token);
    isCustomer = session?.role === ROLE.CUSTOMER;
    carousalImages = await ABTestServices.fetchcarouselModelImages();
  } catch (error) {
    / nothing /;
  }

  return (
    <>
      {isCustomer ? (
        <>
          {!session?.token && versionDetails?.variation?.name === 'B' ? (
            <PreSignUpWeb modelData={modelData} params={initVal} carousalImages={carousalImages} />
          ) : (
            <HomeContainer modelData={modelData} params={initVal} />
          )}
        </>
      ) : (
        <StrangerChatMainDashboard />
      )}
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
