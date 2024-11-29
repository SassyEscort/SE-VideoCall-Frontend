import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { Metadata } from 'next';
import { ModelListingService } from 'services/modelListing/modelListing.services';
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
  return <HomeContainer modelData={modelData} />;
};

export default Home;
