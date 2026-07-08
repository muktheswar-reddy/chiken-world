import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CHIKEN WORLD – Premium Fresh Chicken & Eggs | Bengaluru',
  description: 'Bengaluru\'s freshest chicken store. Country chicken, broiler cuts, boneless, eggs — all fresh daily. Reserve on WhatsApp, collect in store. Call +91 9611419108.',
  keywords: 'fresh chicken Bengaluru, country chicken, nati koli, broiler chicken, boneless chicken, chicken shop Bengaluru, CHIKEN WORLD',
  openGraph: {
    title: 'CHIKEN WORLD – Premium Fresh Chicken & Eggs',
    description: 'Fresh chicken, every day. Reserve on WhatsApp, collect from store.',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#C8102E" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
