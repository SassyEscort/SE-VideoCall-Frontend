'use client';
import { ReactNode } from 'react';
import Head from 'next/head';
import { APP_TITLE, KEY_WORDS, META_DESCRIPTION } from 'constants/seoConstants';
import { getHeaderData } from 'constants/headDataConstants';
import { usePathname } from 'next/navigation';

const SEOLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname, 'pathnamepathname');

  const pageTitle = getHeaderData(pathname);
  console.log(pageTitle, 'pageTitlepageTitle');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${pageTitle?.title ?? ''}${APP_TITLE}`}</title>

        <meta name="title" content={`${pageTitle?.metaTitle ?? ''}${APP_TITLE}`} />
        <>
          <meta name="keyword" content={`${pageTitle?.metaKeywords ?? ''}${KEY_WORDS}`} />
          <meta name="description" content={`${pageTitle?.metaDescription ?? ''}${META_DESCRIPTION}`} />
        </>
      </Head>
      {children}
    </>
  );
};

export default SEOLayout;
