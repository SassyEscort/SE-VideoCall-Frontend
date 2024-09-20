import FaqPage from 'views/guestViews/faqPage';
export async function getStaticProps() {
  return {
    props: {}
  };
}
const page = () => {
  return (
    <>
      <FaqPage />
    </>
  );
};

export default page;
