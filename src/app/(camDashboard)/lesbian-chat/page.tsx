import { SEO_DATA_LESBIAN_LIVE_VIDEO_CHAT } from 'constants/seoConstants';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { Metadata } from 'next';
import { LesbianChatDashboard } from 'views/LesbianChatChatDashboardViwes';

export const metadata: Metadata = {
  title: SEO_DATA_LESBIAN_LIVE_VIDEO_CHAT.TITLE,
  description: SEO_DATA_LESBIAN_LIVE_VIDEO_CHAT.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <LesbianChatDashboard searchParams={searchParams} />;

export default Home;
