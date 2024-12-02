import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { Metadata } from 'next';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { getUserDataServerSide } from 'utils/getSessionData';
import HomeContainer from 'views/guestViews/homePage';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://flirtbate.com/models`
    }
  };
}
const Home = async ({ searchParams }: { searchParams: KeyPairAndUndefined }) => {
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

  return <HomeContainer modelData={modelData} params={initVal} />;
};

export default Home;
