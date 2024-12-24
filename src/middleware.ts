import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'index, follow');

  if (url.pathname === '/robots.txt') {
    url.pathname = '/api/robots';
    return NextResponse.rewrite(url);
  }

  if (url.pathname.includes('/details') && !url.pathname.includes('/admin')) {
    return NextResponse.redirect(new URL(url.href.replace('/details', '/models'), request.url));
  }
  return response;
}

export const config = {
  matcher: ['/((?!api/|_next/static|_next/image|favicon.ico|assets/|images/|icon.png|.*\\.(?:png|jpe?g|gif|svg|ico|js|css|scss)).*)']
};
