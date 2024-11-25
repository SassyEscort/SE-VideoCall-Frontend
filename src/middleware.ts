import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();

  if (url.pathname === '/robots.txt') {
    url.pathname = '/api/robots';
    return NextResponse.rewrite(url);
  }
  response.headers.set('X-Robots-Tag', 'index, follow');
  return response;
}

export const config = {
  matcher: ['/robots.txt']
};
