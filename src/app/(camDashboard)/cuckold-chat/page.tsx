import { SEO_DATA_CUCKOLD_LIVE_VIDEO_CHAT } from 'constants/seoConstants';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { Metadata } from 'next';
import { CuckoldChatDashboard } from 'views/CuckoldChatDashboardViwes';

export const metadata: Metadata = {
  title: SEO_DATA_CUCKOLD_LIVE_VIDEO_CHAT.TITLE,
  description: SEO_DATA_CUCKOLD_LIVE_VIDEO_CHAT.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <CuckoldChatDashboard searchParams={searchParams} />;

export default Home;
