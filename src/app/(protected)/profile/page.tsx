import Loading from 'loading';
import dynamic from 'next/dynamic';
// import ProfilePage from 'views/protectedViews';
const ProfilePage = dynamic(() => import('views/protectedViews'), {
  ssr: false,
  loading: Loading
});

const index = () => {
  return (
    <>
      <ProfilePage />
    </>
  );
};

export default index;
