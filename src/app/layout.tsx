import type { Metadata } from 'next';
import ProviderWrapper from './ProviderWrapper';
import CallInitialize from 'views/protectedViews/callingFeature/CallInitialize';
import { CallFeatureProvider } from '../../context/CallFeatureContext';
import CallFeature from 'views/protectedViews/callingFeature';

export const metadata: Metadata = {
  title: 'flirtBate - SassyEscort',
  description: 'flirtBate - SassyEscort'
};

export default function RootLayout({
  children
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <>
            <CallFeatureProvider>
              <CallInitialize />
              <CallFeature />
              {children}
            </CallFeatureProvider>
          </>
        </ProviderWrapper>
      </body>
    </html>
  );
}
