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
import { KeyPairAndUndefined } from 'types/KeyPair';

export const CamToCamDashboard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
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
      {session?.role === ROLE.CUSTOMER ? <HomeContainer modelData={modelData} params={initVal} /> : <CamToCamDashboardBanner />}
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
