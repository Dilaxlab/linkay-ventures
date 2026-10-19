import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/AppShell';
import { Poppins, Fraunces } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-poppins' });
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
});

// <body className={`${poppins.variable} ${fraunces.variable}`}>









export const metadata: Metadata = {
  title: 'Linkay Ventures | Investment, Advisory and Digital Assets, New York',
  description:
    "Capital for what's next. Linkay Ventures connects ambitious ventures and real-world assets with investment, advisory and RWA tokenization strategies.",
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Linkay Ventures | Investment, Advisory and Digital Assets, New York',
    description:
      "Capital for what's next. Linkay Ventures connects ambitious ventures and real-world assets with investment, advisory and RWA tokenization strategies.",
    url: 'https://linkayventures.com/',
    siteName: 'Linkay Ventures',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-page-gradient text-[#004a80] font-redhat antialiased selection:bg-[#894541] selection:text-white min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
