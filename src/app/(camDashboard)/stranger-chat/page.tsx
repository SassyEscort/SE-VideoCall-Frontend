// import { SEO_DATA_DIRTY_TALKS } from 'constants/seoConstants';
// import { Metadata } from 'next';
import { KeyPairAndUndefined } from 'types/KeyPair';
import { StrangerChatDashboard } from 'views/StrangerChatDashboardViwes';

// export const metadata: Metadata = {
//   title: SEO_DATA_DIRTY_TALKS.TITLE,
//   description: SEO_DATA_DIRTY_TALKS.DESCRIPTION
// };

const Home = ({ searchParams }: { searchParams: KeyPairAndUndefined }) => <StrangerChatDashboard searchParams={searchParams} />;

export default Home;
