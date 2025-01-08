import { SEO_DATA_MATURE_LIVE_VIDEO_CHAT } from 'constants/seoConstants';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { Metadata } from 'next';
import { MatureChatDashboard } from 'views/MatureChatDashboardViwes';

export const metadata: Metadata = {
  title: SEO_DATA_MATURE_LIVE_VIDEO_CHAT.TITLE,
  description: SEO_DATA_MATURE_LIVE_VIDEO_CHAT.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <MatureChatDashboard searchParams={searchParams} />;

export default Home;
