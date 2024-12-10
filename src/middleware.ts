import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();
  const randomNumber = Math.random();
  const groupCookie = request.cookies.get('ab-group');
  let group;
  if (!groupCookie) {
    if (randomNumber < 0.6) {
      group = 'A';
    } else {
      group = 'B';
    }
    response.cookies.set('ab-group', group, { httpOnly: true, maxAge: 60 * 60 * 24 * 2 }); // 2-day expiry
  } else {
    group = groupCookie;
  }
  response.headers.set('X-Robots-Tag', 'index, follow');

  if (url.pathname === '/robots.txt') {
    url.pathname = '/api/robots';
    return NextResponse.rewrite(url);
  }
  return response;
}

export const config = {
  matcher: ['/((?!api/|_next/static|_next/image|favicon.ico|assets/|images/|icon.png|.*\\.(?:png|jpe?g|gif|svg|ico|js|css|scss)).*)']
};
