import type { Metadata } from 'next';
import ProviderWrapper from './ProviderWrapper';
import CallInitialize from 'views/protectedViews/callingFeature/CallInitialize';

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
            <CallInitialize />
            {children}
          </>
        </ProviderWrapper>
      </body>
    </html>
  );
}
