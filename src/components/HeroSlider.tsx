'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider() {
  const tickerItems = [
    'VENTURE & ASSET CAPITAL',
    'RWA & DEFI',
    'STRATEGIC PARTNERSHIPS',
    'RESEARCH & INNOVATION',
    'SUSTAINABLE PROSPERITY',
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-88px)] flex flex-col justify-between bg-transparent text-[#004a80] border-b border-[#C5CDD7]/80 overflow-hidden">
      {/* ============================================================
          BACKGROUND IMAGE - CLEAN, NO HARD EDGES
      ============================================================ */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-transparent pointer-events-none">
        <Image
          src="/images/LV4.png"
          alt="Real Assets Token Orbit"
          fill
          priority
          quality={95}
          className="object-cover object-[70%_center] sm:object-[center_55%] lg:object-center"
          sizes="100vw"
        />

        {/* Top fade - very soft */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-[#DDE2E8]/70 via-[#DDE2E8]/20 to-transparent pointer-events-none" />

        {/* Bottom fade - soft */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#DDE2E8]/80 via-[#DDE2E8]/30 to-transparent pointer-events-none" />

        {/* Mobile subtle shade */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#DDE2E8]/40 via-transparent to-[#DDE2E8]/50 pointer-events-none" />
      </div>

      {/* ============================================================
          MAIN HERO CONTENT - CLEAN, NO BORDER BOX
      ============================================================ */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center justify-center px-4 sm:px-6 pt-10 sm:pt-14 pb-12 text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2">
          <span className="text-[10px] sm:text-[13px] font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
            <span>—</span> NEW YORK · UNITED STATES · GLOBAL OPPORTUNITIES
          </span>
        </div>

        {/* Heading */}
       {/* Heading */}
<h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.15]">
  <span className="text-[#004a80]">Capital for </span>
  <span className="relative inline-block pb-2 sm:pb-3">
    {/* Changed to dark blue, Serif Italic to match screenshot */}
    <span className="text-[#004a80] font-serif italic font-medium tracking-normal">
      What&apos;s Next
    </span>

    {/* Gold Underline - Adjusted position & width to match screenshot */}
    <svg
      className="pointer-events-none absolute left-0 right-0 -bottom-2 sm:-bottom-3 w-[95%] mx-auto h-[8px] sm:h-[10px]"
      viewBox="0 0 300 10"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d4a373" />
          <stop offset="50%" stopColor="#e8b87a" />
          <stop offset="100%" stopColor="#c98a5a" />
        </linearGradient>
      </defs>
      <path
        d="M2 6 Q 75 1, 150 5 T 298 4"
        stroke="url(#goldGrad2)"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </span>
</h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 mb-10 max-w-[620px] font-red-hat text-[16px] sm:text-[19px] md:text-[22px] lg:max-w-[780px] font-normal leading-relaxed text-[#004a80] drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]">
          At the intersection of investment, artificial intelligence and digital financial
          infrastructure, Linkay Ventures supports ambitious companies and asset owners with venture
          capital, strategic advisory and real-world asset tokenization.
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Explore Our Platform</span>
            <ArrowRight size={16} className="shrink-0" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={16} className="shrink-0" />
          </Link>
        </div>

        {/* Trust Chips */}
        <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d]/20 pt-8">
          <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
              <span>Smart Capital</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
              <span>Strategic Advisory</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
              <span>Digital Assets</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          TICKER STRIP
      ============================================================ */}
      <div className="relative z-10 w-full border-t border-[#C5CDD7] bg-[#DDE2E8] py-3 sm:py-3.5 overflow-hidden select-none">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#DDE2E8] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#DDE2E8] to-transparent z-10" />

        <div className="flex animate-marquee">
          <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={`track1-${idx}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
                <span className="text-[11px] sm:text-[12.5px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#004a80] hover:text-[#894541] transition-colors cursor-default uppercase">
                  {item}
                </span>
                <span className="text-[#894541]/70 text-xs sm:text-sm font-bold">|</span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10"
            aria-hidden="true"
          >
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={`track2-${idx}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
                <span className="text-[11px] sm:text-[12.5px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#004a80] hover:text-[#894541] transition-colors cursor-default uppercase">
                  {item}
                </span>
                <span className="text-[#894541]/70 text-xs sm:text-sm font-bold">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
