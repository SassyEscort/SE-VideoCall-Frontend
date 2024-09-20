import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EscortDetailPage from 'views/guestViews/details/EscortDetailPage';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const model = params.id;
  return {
    alternates: {
      canonical: `https://flirtbate.com/details/${model}`
    }
  };
}

const WorkerDetailPage = ({ params }: { params: { id: string } }) => {
  const model = params.id;
  return (
    <>
      <Head>
        <Link href={`https://flirtbate.com/details/${model}`} />
      </Head>
      {<EscortDetailPage />}
    </>
  );
};

export default WorkerDetailPage;
