import { getHeaderData } from 'constants/headDataConstants';
import { Metadata } from 'next';
import EscortDetailPage from 'views/guestViews/details/EscortDetailPage';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  console.log(params, 'params');

  const pageTitle = getHeaderData(`/details/${params.id}`);
  console.log(pageTitle, 'pageTitle');

  const model = params.id;
  return {
    title: pageTitle?.title, // Dynamic title based on model ID
    alternates: {
      canonical: `https://flirtbate.com/details/${model}`
    }
  };
}

const WorkerDetailPage = () => {
  return <>{<EscortDetailPage />}</>;
};

export default WorkerDetailPage;
