'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-[74px] right-[22px] z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-[#894541]/20 hover:shadow-[#894541]/40 transition-all duration-300 border-2 border-[#894541] hover:-translate-y-1 active:scale-95 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} className="stroke-[2.5] transition-colors" />
    </button>
  );
}
