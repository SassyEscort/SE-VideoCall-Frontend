import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ModelListingService } from 'services/modelListing/modelListing.services';
import { parseQueryString } from 'utils/genericFunction';
import { getUserDataServerSide } from 'utils/getSessionData';
import HomeContainer from 'views/guestViews/homePage';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://flirtbate.com/models`
    }
  };
}
const Home = async () => {
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

  return <HomeContainer modelData={modelData} params={initVal} />;
};

export default Home;
