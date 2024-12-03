import { SEO_DATA_CHAT_WITH_GIRLS } from 'constants/seoConstants';
import { Metadata } from 'next';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { ChatToGirlDashBoard } from 'views/ChatToGirlDashBoardViews';

export const metadata: Metadata = {
  title: SEO_DATA_CHAT_WITH_GIRLS.TITLE,
  description: SEO_DATA_CHAT_WITH_GIRLS.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <ChatToGirlDashBoard searchParams={searchParams} />;

export default Home;
