const lastmod = '2024-01-01T10:33:00+00:00';

async function getSiteMapString() {
  let sitemapString = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
  http://www.w3.org/1999/xhtml
  http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd">`;

  let sitemapUrls = [
    {
      loc: 'https://staging.flirtbate.com/',
      lastmod,
      priority: '1.0'
    }
  ];

  sitemapUrls.forEach((x) => {
    sitemapString += `<url><loc>${x.loc}</loc><lastmod>${x.lastmod}</lastmod><priority>${x.priority}</priority></url>`;
  });
  sitemapString += '</urlset>';

  return sitemapString;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap
  const sitemap = await getSiteMapString();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
