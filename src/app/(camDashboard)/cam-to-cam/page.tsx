import { SEO_DATA_CAM_TO_CAM } from 'constants/seoConstants';
import { Metadata } from 'next';
import { CamToCamDashboard } from 'views/CamDashboardViews';

export const metadata: Metadata = {
  title: SEO_DATA_CAM_TO_CAM.TITLE,
  description: SEO_DATA_CAM_TO_CAM.DESCRIPTION
};

const Home = () => <CamToCamDashboard />;

export default Home;
