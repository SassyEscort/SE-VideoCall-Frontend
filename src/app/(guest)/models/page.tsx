import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { CarousalModelImageRes, ABTestServices } from 'services/abTest/abTest.services';
import { ModelListingRes, ModelListingService } from 'services/modelListing/modelListing.services';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { getUserDataServerSide } from 'utils/getSessionData';
import PreSignUpWeb from 'views/guestViews/abTestComponent/preSignUpWeb';
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
  let carousalImages: CarousalModelImageRes[] = [];
  try {
    modelData = await ModelListingService.getModelListing(initVal, session.token);
    carousalImages = await ABTestServices.fetchcarouselModelImages();
  } catch (error) {
    /* nothing */
  }

  return (
    <>
      {!session?.token && versionDetails?.variation?.name === 'B' ? (
        <PreSignUpWeb modelData={modelData} params={initVal} carousalImages={carousalImages} />
      ) : (
        <HomeContainer modelData={modelData} params={initVal} />
      )}
    </>
  );
};

export default Home;
