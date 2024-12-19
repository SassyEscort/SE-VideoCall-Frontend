import { Metadata } from 'next';
import { ModelSeoService } from 'services/modelSeo/modelSeo.services';
import { VideoCallProvider } from 'contexts/videoCallContext';
import { CallFeatureProvider } from 'contexts/ZegoCallContextClone';
import dynamic from 'next/dynamic';
const EscortDetailPage = dynamic(() => import('views/guestViews/details/EscortDetailPage'));

const CallFeature = dynamic(() => import('views/protectedViews/zegoCallingFeature'));

// import { CallFeatureProvider } from 'contexts/CallFeatureContext';
// const CallFeature = dynamic(() => import('views/protectedViews/callingFeature'));

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const model = params.id;
  if (model) {
    const res = await ModelSeoService.getModelSeo(model);
    const genericTitle = `${res?.model_name} - ${res?.country_name} Model | Free Sex Call & Adult chat on Flirtbate`;
    const genericDescription = `Connect with ${res?.model_name}, a  ${res?.country_name} model, for live adult chat and free sex calls on Flirtbate. Enjoy interactive shows and intimate conversations in real-time.`;
    const genericKeywords = `${res?.model_name} ${res?.country_name} Model Adult chat Free Sex Call Flirtbate`;

    const title = res?.title ? res?.title : genericTitle;
    const keywords = res?.keywords ? res?.keywords : genericKeywords;
    const description = res?.description ? res?.description : genericDescription;
    const canonicalUrl = `https://staging.flirtbate.com/models/${model}`;
    const image = 'https://staging.flirtbate.com/images/model.jpg';

    return {
      title,
      keywords,
      description,
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: `${res?.model_name} - ${res?.country_name} Model`
          }
        ],
        type: 'website'
      }
    };
  } else {
    return {
      title: 'Default Title',
      description: 'Default Description',
      alternates: {
        canonical: 'https://staging.flirtbate.com/models'
      },
      openGraph: {
        title: 'Default Title',
        description: 'Default Description',
        url: 'https://staging.flirtbate.com/models',
        images: [
          {
            url: 'https://staging.flirtbate.com/images/model.jpg',
            width: 1200,
            height: 630,
            alt: 'Default Image'
          }
        ],
        type: 'website'
      }
    };
  }

  return {};
}

const WorkerDetailPage = () => {
  return (
    <VideoCallProvider>
      <CallFeatureProvider>
        <CallFeature />
        <EscortDetailPage />
      </CallFeatureProvider>
    </VideoCallProvider>
  );
};

export default WorkerDetailPage;
