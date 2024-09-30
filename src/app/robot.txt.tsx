import { NextApiResponse } from 'next';

function Robots() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const sitemap = 'User-agent: *\nAllow: /\nSitemap: https://flirtbate.com/sitemap.xml';
  res.setHeader('Content-Type', 'text/plain');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default Robots;
