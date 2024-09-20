import Head from 'next/head';
import TermaAndCondition from 'views/guestViews/termsconditionPage';

const page = () => {
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <meta property="og:title" content="Open Graph Title" />
        <meta property="og:description" content="Open Graph description" />
      </Head>
      <TermaAndCondition />
    </>
  );
};

export default page;
