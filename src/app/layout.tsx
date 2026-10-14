import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/AppShell';

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
      <body className="bg-[#060a16] text-[#f4f7ff] font-redhat antialiased selection:bg-[#9F1D2C] selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
