import { SEO_DATA_CHAT_WITH_GIRLS } from 'constants/seoConstants';
import { Metadata } from 'next';
import { ChatToGirlDashBoard } from 'views/ChatToGirlDashBoardViews';

export const metadata: Metadata = {
  title: SEO_DATA_CHAT_WITH_GIRLS.TITLE,
  description: SEO_DATA_CHAT_WITH_GIRLS.DESCRIPTION
};

const Home = () => <ChatToGirlDashBoard />;

export default Home;
