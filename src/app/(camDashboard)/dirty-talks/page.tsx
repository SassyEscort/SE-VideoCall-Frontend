import { SEO_DATA_DIRTY_TALKS } from 'constants/seoConstants';
import { Metadata } from 'next';
import { DirtyTalksDashBoard } from 'views/DirtyTalksDashboardViews';

export const metadata: Metadata = {
  title: SEO_DATA_DIRTY_TALKS.TITLE,
  description: SEO_DATA_DIRTY_TALKS.DESCRIPTION
};

const Home = () => <DirtyTalksDashBoard />;

export default Home;
