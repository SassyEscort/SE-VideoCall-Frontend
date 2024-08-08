import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname === '/sitemap.xml') {
    url.pathname = '/api/sitemap';
    return NextResponse.rewrite(url);
  }

  if (url.pathname === '/robots.txt') {
    url.pathname = '/api/robots';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sitemap.xml', '/robots.txt']
};
