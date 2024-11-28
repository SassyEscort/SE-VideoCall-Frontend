/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ProviderWrapper from './ProviderWrapper';
import AuthFeaturProvider from 'contexts/AuthContext';
import TawkProvider from 'contexts/TawkContext';
import { SEO_DATA } from 'constants/seoConstants';
import Script from 'next/script';
// import dynamic from 'next/dynamic';
// import '../app/globals.scss';
// const ProviderWrapper = dynamic(() => import('./ProviderWrapper'));
// // const TawkProvider = dynamic(() => import('contexts/TawkContext'));
// // const AuthFeaturProvider = dynamic(() => import('contexts/AuthContext'));

export const metadata: Metadata = {
  title: SEO_DATA.TITLE,
  description: SEO_DATA.DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: JSX.Element;
}>) {
  const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="https://ik.imagekit.io/gpgv4gnda/images/1729084436818home-banner-model1_1qobIoZFu.webp"
          type="image/webp"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="robots" content="index, follow" />
      </head>

      {isProduction && (
        <>
          <Script defer async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
          <Script
            async
            defer
            id="dataLayer-script"
            type="text/javascript"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `
            }}
          />
          <Script
            async
            defer
            id="gtag-script"
            type="text/javascript"
            strategy="lazyOnload"
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
          />

          {/* <Script
            async
            defer
            id="lumetric-script"
            type="text/javascript"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,l,u,x,j,s,a,b){
              window.flux || 
              (j="undefined"!=typeof fluxOptions?fluxOptions:{}, 
               s="undefined"!=typeof fluxDefaults?fluxDefaults:{}, 
               (a=l.createElement("script")).src="https://"+u+"/integration/lumetricv2.min.js?v="+x, 
               a.type="text/javascript", 
               a.async="true", 
               queue=[], 
               window.flux={track:function(){queue.push(arguments)}}, 
               a.onload=a.onreadystatechange=function(){
                 var rs=this.readyState; 
                 if(!rs || "complete"==rs || "loaded"==rs) {
                   try {
                     for(window.flux=new Lumetric(u,x,j,s); 0!=queue.length;) {
                       var args=queue.pop(); 
                       window.flux.track.apply(null,args);
                     }
                   } catch(e) {}
                 }
               }, 
               (b=document.getElementsByTagName("script")[0]).parentNode.insertBefore(a,b));
            }(window,document,"tracking.flirtbate.com","3.3.0");
          `
            }}
          />
          <Script
            async
            defer
            id="ff-pro-view-event"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `flux.track("view");`
            }}
          /> */}
        </>
      )}
      <body>
        {/* <Script
          defer
          id="clarity-script"
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "mxxnph7kub");`
          }}
        /> */}
        {/* <Script
          async
          id="gtag-script"
          type="text/javascript"
          strategy="lazyOnload"
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
        />
        {isProduction && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
            <Script
              async
              id="dataLayer-script"
              type="text/javascript"
              strategy="lazyOnload"
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
        <Suspense fallback={<div>Loading...</div>}>
          <ProviderWrapper>
            <AuthFeaturProvider>
              <TawkProvider>{children}</TawkProvider>
            </AuthFeaturProvider>
          </ProviderWrapper>
        </Suspense>
      </body>
    </html>
  );
}
