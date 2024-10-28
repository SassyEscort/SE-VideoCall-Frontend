import { Metadata } from 'next';
import HomeContainer from 'views/guestViews/homePage';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://flirtbate.com`
    }
  };
}
const Home = () => {
  return <HomeContainer />;
};

export default Home;
