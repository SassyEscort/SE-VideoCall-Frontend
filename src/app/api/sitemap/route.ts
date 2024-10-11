export async function GET() {
  const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://flirtbate.com/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      </urlset>
    `;
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
