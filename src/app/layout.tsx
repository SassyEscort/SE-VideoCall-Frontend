import type { Metadata } from 'next';
import ProviderWrapper from './ProviderWrapper';

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
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
