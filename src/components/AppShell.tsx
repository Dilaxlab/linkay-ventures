'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import BackToTop from '@/components/BackToTop';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (isHome) {
      document.documentElement.classList.add('home-page-theme');
      document.body.classList.add('home-page-theme');
    } else {
      document.documentElement.classList.remove('home-page-theme');
      document.body.classList.remove('home-page-theme');
    }
  }, [isHome]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
    </>
  );
}
