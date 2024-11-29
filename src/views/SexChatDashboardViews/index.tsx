import SexChatDashboardBanner from './sexChatMainBanner';
import WhySexChatComponent from './WhySexChatView';
import SexyChatAtFingertips from './SexyChatAtFingertips';
import ExclusiveSexChatDashboard from './ExclusiveSexChatDashboard';
import ReadyOneOnOneComponent from './readyOneOnOne';
import MeetRealPeople from './meetRealPeopleBanner';
import HomeContainer from 'views/guestViews/homePage';
import LiveSexChatDashboard from './LiveSexChat';
import HowSexVideoChatWorks from './HowSexVideoChatWorks';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { getUserDataServerSide } from 'utils/getSessionData';
import { headers } from 'next/headers';
import { parseQueryString } from 'utils/genericFunction';

export const SexChatDashBoard = async () => {
  const session = await getUserDataServerSide();
  const headerList = headers();
  const xUrl = headerList.get('referer') as string;
  const url = (xUrl && new URL(xUrl)) || '';
  const searchParams = (url && parseQueryString(url.searchParams?.toString())) || {};
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
      {isCustomer ? <HomeContainer modelData={modelData} params={initVal}/> : <SexChatDashboardBanner />}
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
