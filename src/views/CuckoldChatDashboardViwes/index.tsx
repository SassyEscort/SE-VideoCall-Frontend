import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingRes, ModelListingService } from 'services/modelListing/modelListing.services';
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
import { CarousalModelImageRes, ABTestServices } from 'services/abTest/abTest.services';
import { cookies } from 'next/headers';
import PreSignUpWeb from 'views/guestViews/abTestComponent/preSignUpWeb';

export const CuckoldChatDashboard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
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
        <CuckoldChatMainDashboard />
      )}
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
