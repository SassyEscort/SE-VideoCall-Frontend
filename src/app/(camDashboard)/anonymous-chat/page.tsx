import { SEO_DATA_ANONYMOUS_CHAT_LIVE_VIDEO_CHAT } from 'constants/seoConstants';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { Metadata } from 'next';
import { AnonymousChatDashboardViwes } from 'views/AnonymousChatDashboardViwes';

export const metadata: Metadata = {
  title: SEO_DATA_ANONYMOUS_CHAT_LIVE_VIDEO_CHAT.TITLE,
  description: SEO_DATA_ANONYMOUS_CHAT_LIVE_VIDEO_CHAT.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <AnonymousChatDashboardViwes searchParams={searchParams} />;

export default Home;
