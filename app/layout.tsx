import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cartervalerealty.example'),
  title: {
    default: 'Carter & Vale Realty Group',
    template: '%s | Carter & Vale Realty Group',
  },
  description:
    'Premium real estate discovery and brokerage intelligence for Austin, Texas residential and commercial markets.',
  openGraph: {
    title: 'Carter & Vale Realty Group',
    description:
      'Where Smart Investments Meet Real Homes. Explore premium listings, market intelligence, and broker-grade analytics.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carter & Vale Realty Group',
    description:
      'Explore residential and commercial listings with premium market intelligence.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
