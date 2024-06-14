import ModelGuard from 'utils/route-guard/ModelGuard';
import ModelPage from 'views/protectedModelViews';

const Home = () => {
  return (
    <ModelGuard>
      <ModelPage />
    </ModelGuard>
  );
};

export default Home;
