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
          FULL-BLEED BACKGROUND IMAGE WITH RADIAL GRADIENT SHADE
      ============================================================ */}
      <div
        className="absolute inset-0 z-0 overflow-hidden bg-transparent pointer-events-none"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 6%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 6%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 85%, transparent 100%)',
        }}
      >
        <Image
          src="/images/hero3.jpeg"
          alt="Real Assets Token Orbit"
          fill
          priority
          quality={95}
          className="object-cover object-[center_62%] lg:object-[center_60%] opacity-70 md:opacity-80 scale-110 blur-[10px]"
          style={{ filter: 'blur(10px)', WebkitFilter: 'blur(10px)' }}
          sizes="100vw"
        />

        {/* Soft edge blend overlay into solid #DDE2E8 (No white center) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 35%, rgba(221, 226, 232, 0.5) 70%, #DDE2E8 100%)',
          }}
        />

        {/* Soft text backdrop wash on the left with #DDE2E8 */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[65%] pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(221, 226, 232, 0.8) 0%, rgba(221, 226, 232, 0.35) 70%, transparent 100%)',
          }}
        />
      </div>

      {/* ============================================================
          MAIN HERO CONTENT OVERLAY
      ============================================================ */}
      <div className="relative z-10 max-w-[1340px] w-full mx-auto px-5 sm:px-12 lg:px-16 pt-14 sm:pt-20 pb-12 sm:pb-16 flex-1 flex items-center">
        <div className="relative max-w-[760px] xl:max-w-[880px] flex flex-col items-start text-left">
          {/* #DDE2E8 Smoky Mist / Cloud Backdrop to highlight the text */}
          <div
            className="absolute -inset-6 sm:-inset-10 lg:-inset-14 rounded-[50px] pointer-events-none -z-10 blur-2xl sm:blur-3xl opacity-90"
            style={{
              background:
                'radial-gradient(ellipse at 40% 45%, rgba(221, 226, 232, 0.95) 0%, rgba(221, 226, 232, 0.85) 45%, rgba(221, 226, 232, 0.35) 70%, transparent 100%)',
            }}
          />
          <div
            className="absolute -inset-4 sm:-inset-8 rounded-3xl pointer-events-none -z-10 backdrop-blur-[6px] opacity-75"
            style={{
              maskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* Eyebrow */}
          <div className="mb-4 sm:mb-5 flex items-start gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold text-[#A12B3C] leading-5 shrink-0">
              —
            </span>
            <span className="text-[11px] sm:text-[13px] font-mono font-bold tracking-[0.14em] sm:tracking-[0.2em] text-[#A12B3C] uppercase leading-5">
              NEW YORK · UNITED STATES · GLOBAL OPPORTUNITIES
            </span>
          </div>

          {/* Heading - Single line on desktop, high-impact bold */}
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black leading-tight tracking-tight text-[#004a80] mb-5 lg:whitespace-nowrap">
            Capital for <span className="text-[#A12B3C]">What&apos;s Next</span>
          </h1>

          {/* Subtitle - Bold, high-contrast, crystal clear */}
          <p className="font-red-hat text-[#004a80] text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.65] max-w-[660px] mb-8 font-semibold">
            At the intersection of investment, artificial intelligence and digital financial
            infrastructure, Linkay Ventures supports ambitious companies and asset owners with
            venture capital, strategic advisory and real-world asset tokenization.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-sm sm:text-[15px] font-bold px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-[#A12B3C]/30 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <span>Explore Our Platform</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm sm:text-[15px] font-bold px-7 py-3.5 sm:py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Start a Conversation</span>
            </Link>
          </div>

          {/* Trust Chips Line */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161, 43, 60,0.5)]" />
              <span>Venture Capital</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161, 43, 60,0.5)]" />
              <span>Strategic Advisory</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161, 43, 60,0.5)]" />
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
