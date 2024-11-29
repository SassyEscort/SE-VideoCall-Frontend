import CamToCamDashboardBanner from './camMainBanner';
import CamToCamChooseModal from './camChooseModalViews';
import CamConnectionLevel from './camConnectinonLevelViews';
import WebcamDashboard from './webCamDashboard';
import CamSexExperience from './camSexExperienceViews';
import WebcamDashboardBeyond from './webCamBeyondDashboard';
import CamExperienceBanner from './camExperienceBanner';
import CamPerks from './camPerksViews';
import HomeContainer from 'views/guestViews/homePage';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { getUserDataServerSide } from 'utils/getSessionData';
import { ROLE } from 'constants/workerVerification';

export const CamToCamDashboard = async () => {
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
      {session?.role === ROLE.CUSTOMER ? <HomeContainer modelData={modelData} /> : <CamToCamDashboardBanner />}
      <WebcamDashboard />
      <CamToCamChooseModal />
      <WebcamDashboardBeyond />
      <CamConnectionLevel />
      <CamSexExperience />
      <CamPerks />
      <CamExperienceBanner isCustomer={isCustomer} />
    </>
  );
};
