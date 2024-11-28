import CounterContainer from 'components/Counter';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://flirtbate.com`
    }
  };
}
const SSR = () => {
  return <CounterContainer />;
};

export default SSR;
