import AuthGuard from 'utils/route-guard/AuthGuard';
import VerificationContainer from 'views/protectedModelViews/verification';

const VerificationPage = () => {
  return (
    <AuthGuard>
      <VerificationContainer />
    </AuthGuard>
  );
};

export default VerificationPage;
