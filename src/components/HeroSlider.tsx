'use client';

import { ArrowRight, Play } from 'lucide-react';
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
          FULL-BLEED BACKGROUND IMAGE WITH ELEGANT LIGHT SHADES
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

        {/* 1. Light top blend shade directly under navbar */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#DDE2E8]/85 via-[#DDE2E8]/30 to-transparent pointer-events-none" />

        {/* 2. Light bottom blend shade into ticker strip */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#DDE2E8] via-[#DDE2E8]/40 to-transparent pointer-events-none" />

        {/* 3. Light left-side shade for desktop text clarity */}
        <div className="hidden sm:block absolute inset-y-0 left-0 w-[60%] lg:w-[50%] bg-gradient-to-r from-[#DDE2E8]/60 via-[#DDE2E8]/20 to-transparent pointer-events-none" />

        {/* 4. Light mobile framing shade so image and text coexist beautifully */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#DDE2E8]/50 via-transparent to-[#DDE2E8]/60 pointer-events-none" />
      </div>

      {/* ============================================================
          MAIN HERO CONTENT OVERLAY - CENTERED (Like 2nd Code)
      ============================================================ */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center justify-center px-4 sm:px-6 text-center">
        {/* Light radial ambient mist behind hero copy */}
        <div
          className="absolute -inset-6 sm:-inset-10 rounded-3xl pointer-events-none -z-10 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(221, 226, 232, 0.7) 0%, rgba(221, 226, 232, 0.3) 55%, transparent 100%)',
          }}
        />

        {/* Eyebrow - Centered */}
        <div className="mb-6 inline-flex items-center gap-2">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#A12B3C] uppercase flex items-center gap-2">
            <span>—</span> NEW YORK · UNITED STATES · GLOBAL OPPORTUNITIES
          </span>
        </div>

        {/* Heading - Centered, Large, Impactful */}
        <h1 className="mb-6 font-poppins text-[32px] sm:text-[46px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white">
          Capital for{' '}
          <span className="text-[#A12B3C] drop-shadow-[0_0_20px_rgba(161,43,60,0.35)]">
            What&apos;s Next
          </span>
        </h1>

        {/* Subtitle - Centered, Bold, Crystal Clear */}
        <p className="mx-auto mb-10 max-w-[620px] font-red-hat text-[16px] sm:text-[19px] md:text-[22px] lg:max-w-[780px] font-normal leading-relaxed text-[#004a80]">
          At the intersection of investment, artificial intelligence and digital financial
          infrastructure, Linkay Ventures supports ambitious companies and asset owners with venture
          capital, strategic advisory and real-world asset tokenization.
        </p>

        {/* Action Buttons - Centered */}
        <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#A12B3C]/30 transition-all hover:-translate-y-0.5"
          >
            <span>Explore Our Platform</span>
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Trust Chips Line - Centered */}
        <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d] pt-8">
          <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
              <span>Smart Capital</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
              <span>Strategic Advisory</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
              <span>Digital Assets</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM CAPABILITIES TICKER STRIP (RUNNING MARQUEE)
      ============================================================ */}
      <div className="relative z-10 w-full border-t border-[#C5CDD7] bg-[#DDE2E8] py-3 sm:py-3.5 overflow-hidden select-none">
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#DDE2E8] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#DDE2E8] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {/* Track 1 */}
          <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={`track1-${idx}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
                <span className="text-[11px] sm:text-[12.5px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#004a80] hover:text-[#A12B3C] transition-colors cursor-default uppercase">
                  {item}
                </span>
                <span className="text-[#A12B3C]/70 text-xs sm:text-sm font-bold">|</span>
              </div>
            ))}
          </div>

          {/* Track 2 (Exact duplicate for seamless infinite loop) */}
          <div
            className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10"
            aria-hidden="true"
          >
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={`track2-${idx}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
                <span className="text-[11px] sm:text-[12.5px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#004a80] hover:text-[#A12B3C] transition-colors cursor-default uppercase">
                  {item}
                </span>
                <span className="text-[#A12B3C]/70 text-xs sm:text-sm font-bold">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
