import VideoChatDashboardBanner from './videoChatMainBanner';
import WhyChatChooseModal from './chatChooseModalViews';
import StartYourVideoChatLevel from './startVideoChatViews';
import WhyChooseDashboard from './whyChooseDashboard';
import VideoChatExperience from './VideoChatExperienceViews';
import WhySpecialDashboardBeyond from './whatMakesChatSpecial';
import VideoChatExperienceBanner from './chatExperienceBanner';
import HowChatWorks from './howVideoChatWorkViews';
import HomeContainer from 'views/guestViews/homePage';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { getUserDataServerSide } from 'utils/getSessionData';

export const ChatToGirlDashBoard = async () => {
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
      {isCustomer ? <HomeContainer modelData={modelData} /> : <VideoChatDashboardBanner />}
      <WhyChooseDashboard />
      <WhyChatChooseModal />
      <WhySpecialDashboardBeyond />
      <StartYourVideoChatLevel />
      <VideoChatExperience />
      <HowChatWorks />
      <VideoChatExperienceBanner isCustomer={isCustomer} />
    </>
  );
};
