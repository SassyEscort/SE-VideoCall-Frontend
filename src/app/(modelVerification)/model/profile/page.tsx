import AuthGuard from 'utils/route-guard/AuthGuard';
import ModelPage from 'views/protectedModelViews';

const Home = () => {
  return (
    <AuthGuard>
      <ModelPage />
    </AuthGuard>
  );
};

export default Home;
