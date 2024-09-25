import { Metadata } from 'next';
import { ModelSeoService } from 'services/modelSeo/modelSeo.services';
import EscortDetailPage from 'views/guestViews/details/EscortDetailPage';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const model = params.id;
  if (model) {
    const res = await ModelSeoService.getModelSeo(model);

    const title = res.title ? res.title : model;
    const keywords = res.keywords ? res.keywords : model;
    const description = res.description ? res.description : model;
    const canonicalUrl = `https://flirtbate.com/details/${model}`;

    return {
      title,
      keywords,
      description,
      alternates: {
        canonical: canonicalUrl
      }
    };
  }

  return {};
}

const WorkerDetailPage = () => {
  return <>{<EscortDetailPage />}</>;
};

export default WorkerDetailPage;
