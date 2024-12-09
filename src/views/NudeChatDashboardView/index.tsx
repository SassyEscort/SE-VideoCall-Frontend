import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { getUserDataServerSide } from 'utils/getSessionData';
import HomeContainer from 'views/guestViews/homePage';
import NudeChatMianDashboard from './NudeChatMainDashboard';
import NodeLiveStream from './NudeLiveStreams';
import NodeChatExpect from './NudeChatExpectDashboard';
import ChooseNodeChat from './ChooseNudeChat';
import NudeChatWorks from './NudeChatWorks';
import BestPlatformForNudeLiveChat from './BestPlatformForNudeLiveChat';
import FeaturesNudeChat from './FeaturesNudeChat';
import PrivateNudeLiveExperience from './PrivateNudeLiveExperience';

export const NudeChatDashboard = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
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
      {isCustomer ? <HomeContainer modelData={modelData} params={initVal} /> : <NudeChatMianDashboard />}
      <NodeLiveStream />
      <NodeChatExpect />
      <ChooseNodeChat />
      <NudeChatWorks />
      <BestPlatformForNudeLiveChat />
      <FeaturesNudeChat />
      <PrivateNudeLiveExperience isCustomer={isCustomer} />
    </>
  );
};
