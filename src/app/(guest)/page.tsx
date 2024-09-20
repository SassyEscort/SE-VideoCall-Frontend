import { Metadata } from 'next';
import Head from 'next/head';
import HomeContainer from 'views/guestViews/homePage';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://flirtbate.com`
    }
  };
}
const Home = () => {
  return (
    <>
      <Head>
        <a href={`https://staging.flirtbate.com/model`} />
      </Head>
      <HomeContainer />
    </>
  );
};

export default Home;
