import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = 'User-agent: *\nAllow: /\nSitemap: https://flirtbate.com/api/sitemap';

  return NextResponse.json(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
