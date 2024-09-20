import TermaAndCondition from 'views/guestViews/termsconditionPage';

const page = () => {
  return (
    <>
      <body>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <meta property="og:title" content="Open Graph Title" />
        <meta property="og:description" content="Open Graph description" />
      </body>
      <TermaAndCondition />
    </>
  );
};

export default page;
