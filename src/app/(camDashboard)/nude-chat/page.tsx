import { SEO_DATA_NUDE_LIVE_VIDEO_CHAT } from 'constants/seoConstants';
import { Metadata } from 'next';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { NudeChatDashboard } from 'views/NudeChatDashboardView';

export const metadata: Metadata = {
  title: SEO_DATA_NUDE_LIVE_VIDEO_CHAT.TITLE,
  description: SEO_DATA_NUDE_LIVE_VIDEO_CHAT.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <NudeChatDashboard searchParams={searchParams} />;

export default Home;
