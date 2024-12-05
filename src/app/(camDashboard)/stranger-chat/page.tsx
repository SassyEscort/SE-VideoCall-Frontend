import { SEO_DATA_STRANGER_VIDEO_CHAT } from 'constants/seoConstants';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { Metadata } from 'next';
import { StrangerChatDashboard } from 'views/StrangerChatDashboardViwes';

export const metadata: Metadata = {
  title: SEO_DATA_STRANGER_VIDEO_CHAT.TITLE,
  description: SEO_DATA_STRANGER_VIDEO_CHAT.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <StrangerChatDashboard searchParams={searchParams} />;

export default Home;
