import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { ABTestServices } from 'services/abTest/abTest.services';
import { getPageName } from 'utils/abTesting';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();
  const session = await getUserDataMiddleware(request);
  const groupCookie = request.cookies.get('ab-group')?.value;
  const { pathname } = request.nextUrl;
  let group;
  let pageName;
  if (!session?.accessToken) {
    if (!groupCookie) {
      const experimentData = await ABTestServices.fetchGuestPageExperiment();
      group = { experiment: experimentData?.[0]?.experiment_id || 1, variation: experimentData?.[0]?.variation_id || 1 };
      response.cookies.set('ab-group', JSON.stringify(group), {
        maxAge: 60 * 60 * 24 * 2,
        secure: true,
        sameSite: 'strict'
      });
    }
  } else {
    pageName = getPageName(pathname, session?.role || '', session?.accessToken || '');
    const experimentData = await ABTestServices.fetchPageExperiment(session?.accessToken, pageName);

    group = { experiment: experimentData?.[0]?.experiment_id || 1, variation: experimentData?.[0]?.variation_id || 1 };

    response.cookies.set('ab-group', JSON.stringify(group), {
      maxAge: 60 * 60 * 24 * 2,
      secure: true,
      sameSite: 'strict'
    });
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

const getUserDataMiddleware = async (request: any) => {
  const session = await getToken({ req: request, secret: process.env.NEXT_APP_JWT_SECRET });
  const user = session?.picture;
  const data = JSON.parse(user || '{}');
  return data;
};
