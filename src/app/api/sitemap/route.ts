import { NextResponse } from 'next/server';

async function getSiteMapString() {
  const lastmod = '2024-01-01T10:33:00+00:00';

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
      loc: 'https://flirtbate.com/',
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

export async function GET() {
  const sitemap = await getSiteMapString();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml'
    }
  });
}
