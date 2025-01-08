import { SEO_DATA_DIRTY_TALKS } from 'constants/seoConstants';
import { Metadata } from 'next';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { DirtyTalksDashBoard } from 'views/DirtyTalksDashboardViews';

export const metadata: Metadata = {
  title: SEO_DATA_DIRTY_TALKS.TITLE,
  description: SEO_DATA_DIRTY_TALKS.DESCRIPTION
};

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <DirtyTalksDashBoard searchParams={searchParams} />;

export default Home;
