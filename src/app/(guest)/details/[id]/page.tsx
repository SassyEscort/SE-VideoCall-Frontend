import { Metadata } from 'next';
import Head from 'next/head';
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
  const modelId = params.id;
  return (
    <>
      <Head>
        <link href={`https://flirtbate.com/details/${modelId}`} />
      </Head>
      {<EscortDetailPage />}
    </>
  );
};

export default WorkerDetailPage;
