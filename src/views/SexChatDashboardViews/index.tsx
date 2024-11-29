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

export const SexChatDashBoard = async () => {
  const session = await getUserDataServerSide();
  const initVal = {
    fromAge: '',
    toAge: '',
    fromPrice: '',
    toPrice: '',
    language: '',
    isOnline: '',
    country: '',
    sortOrder: '',
    sortField: '',
    gender: '',
    page: 1,
    pageSize: HOME_PAGE_SIZE,
    offset: 0,
    email: ''
  };
  const modelData = await ModelListingService.getModelListing(initVal, session.token);
  const isCustomer = session?.role === ROLE.CUSTOMER;

  return (
    <>
      {isCustomer ? <HomeContainer modelData={modelData} /> : <SexChatDashboardBanner />}
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
