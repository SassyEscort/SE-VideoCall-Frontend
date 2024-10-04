/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { Metadata } from 'next';
import ProviderWrapper from './ProviderWrapper';
import { SEO_DATA } from 'constants/seoConstants';
import { AuthFeaturProvider } from '../../context/AuthContext';
import { TawkProvider } from '../../context/TawkContext';

export const metadata: Metadata = {
  title: SEO_DATA.TITLE,
  description: SEO_DATA.DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: JSX.Element;
}>) {
  const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/home/home-banner-model.webp" />
        {isStaging && <meta name="robots" content="noindex, nofollow" />}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mxxnph7kub");`
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-16620775104/u-m-CLqVyb0ZEMDNs_U9',
                  'event_callback': callback
              });
              return false;
            }`
          }}
        /> */}
        {/* {isProduction && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `
              }}
            />
          </>
        )} */}
        <script
          id="tawk-to"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/66fbef6be5982d6c7bb726ab/1i941ug0n';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `
          }}
        />
        {/* <script
          id="tawk-to"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/66f6b3774cbc4814f7dff7db/1i8pqq3gj';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `
          }}
        /> */}
      </head>
      <body>
        <ProviderWrapper>
          <AuthFeaturProvider>
            <TawkProvider>{children}</TawkProvider>
          </AuthFeaturProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
}
