import Loading from 'loading';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
// import HomeContainer from 'views/guestViews/homePage';
const HomeContainer = dynamic(() => import('views/guestViews/homePage'), {
  ssr: false,
  loading: Loading
});

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
