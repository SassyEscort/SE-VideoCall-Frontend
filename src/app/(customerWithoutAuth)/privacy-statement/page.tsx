import PrivacyPolicy from 'views/guestViews/privacyPolicyPage';

export async function getServerSideProps() {
  return {
    props: {}
  };
}
const page = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default page;
