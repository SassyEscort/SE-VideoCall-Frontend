'use client';

import ThemeCustomization from 'themes';
import Locales from 'components/Locales';
import { ConfigProvider } from 'contexts/configContext';
import { Manrope } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import '../app/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import ModelLastActive from 'views/protectedModelViews/ModelLastAvtive';

const manropeFont = Manrope({ subsets: ['latin'] });

const ProviderWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Locales>
            <>
              <SessionProvider refetchInterval={0}>
                {children}
                <ModelLastActive />
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

export default ProviderWrapper;
