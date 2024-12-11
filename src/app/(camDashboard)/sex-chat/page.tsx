import { SEO_DATA_SEX_CHAT } from 'constants/seoConstants';
import { Metadata } from 'next';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { SexChatDashBoard } from 'views/SexChatDashboardViews';

export const metadata: Metadata = {
  title: SEO_DATA_SEX_CHAT.TITLE,
  description: SEO_DATA_SEX_CHAT.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <SexChatDashBoard searchParams={searchParams} />;

export default Home;
