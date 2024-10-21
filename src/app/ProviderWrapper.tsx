'use client';

// import ThemeCustomization from 'themes';
// import Locales from 'components/Locales';
// import { ConfigProvider } from 'contexts/configContext';
import { Manrope } from 'next/font/google';
import '../app/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import dynamic from 'next/dynamic';
// import { SessionProvider } from 'next-auth/react';
import { memo } from 'react';
const GoogleTagManager = dynamic(() => import('@next/third-parties/google').then((module) => module.GoogleTagManager), { ssr: false });
const GoogleAnalytics = dynamic(() => import('@next/third-parties/google').then((module) => module.GoogleAnalytics), { ssr: false });
const ToastContainer = dynamic(() => import('react-toastify').then((module) => module.ToastContainer), { ssr: false });
const ThemeCustomization = dynamic(() => import('themes').then((module) => module.default), { ssr: false });
const Locales = dynamic(() => import('components/Locales').then((module) => module.default), { ssr: false });
const SessionProvider = dynamic(() => import('next-auth/react').then((module) => module.SessionProvider), { ssr: false });
const ConfigProvider = dynamic(() => import('contexts/configContext').then((module) => module.ConfigProvider), { ssr: false });

const manropeFont = Manrope({ subsets: ['latin'], display: 'swap' });

const ProviderWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Locales>
            <>
              <SessionProvider refetchInterval={0}>
                {children}
                {process.env.NEXT_PUBLIC_ENV === 'production' && (
                  <>
                    <GoogleTagManager gtmId={'GTM-P6BCQRQV'} />
                    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
                  </>
                )}
              </SessionProvider>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="version2"
                style={{
                  fontFamily: manropeFont.style.fontFamily
                }}
              />
            </>
          </Locales>
        </LocalizationProvider>
      </ThemeCustomization>
    </ConfigProvider>
  );
};

export default memo(ProviderWrapper);
