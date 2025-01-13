import HomeContainer from 'views/guestViews/homePage';
import DirtyTalksMainBanner from './DirtyTalksMainBanner';
import DirtyHottestTalksDashboard from './DirtyHottestTalksDashboard';
import DirtyChatExperienceDashboard from './DirtyChatExperienceDashboard';
import DirtyCamToCamChatsDashboard from './DirtyCamToCamChatsDashboard';
import DirtyCamChatsDashboard from './DirtyCamChatsDashboard';
import DirtyCamsUniqueDashboard from './DirtyCamsUniqueDashboard';
import DirtyWebcamsFingertips from './DirtyWebcamsFingertips';
import EnjoyDirtyCams from './EnjoyDirtyCams';
import { ModelListingRes, ModelListingService } from 'services/modelListing/modelListing.services';
import { ROLE } from 'constants/workerVerification';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { getUserDataServerSide } from 'utils/getSessionData';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { ABTestServices, CarousalModelImageRes } from 'services/abTest/abTest.services';
import { cookies } from 'next/headers';
import PreSignUpWeb from 'views/guestViews/abTestComponent/preSignUpWeb';

export const DirtyTalksDashBoard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
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
        <DirtyTalksMainBanner />
      )}
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
