import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'index, follow');

  if (url.pathname === '/robots.txt') {
    url.pathname = '/api/robots';
    return NextResponse.rewrite(url);
  }
  return response;
}

export const config = {
  matcher: ['/robots.txt']
};
