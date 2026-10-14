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
    <section className="relative w-full min-h-[calc(100vh-88px)] flex flex-col justify-between bg-[#030712] text-[#f4f7ff] border-b border-[#1f293d] overflow-hidden">
      {/* ============================================================
          FULL-BLEED BACKGROUND IMAGE
      ============================================================ */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#030712]">
        <Image
          src="/images/Futuristic Orbital Blue Sculpture.png"
          alt="Real Assets Token Orbit"
          fill
          priority
          quality={95}
          className="object-cover object-center opacity-70 md:opacity-80 blur-[3px] scale-[1.02]"
          sizes="100vw"
        />

        {/* Ambient Dark Gradients for Maximum Legibility & Text Punch */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/85 to-transparent md:w-[65%] lg:w-[55%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-transparent to-[#030712] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#8c1627]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* ============================================================
          MAIN HERO CONTENT OVERLAY
      ============================================================ */}
      <div className="relative z-10 max-w-[1340px] w-full mx-auto px-5 sm:px-12 lg:px-16 pt-14 sm:pt-20 pb-12 sm:pb-16 flex-1 flex items-center">
        <div className="max-w-[760px] xl:max-w-[880px] flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-5 flex items-start gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-black text-[#ff3b53] leading-5 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              —
            </span>
            <span className="text-[11px] sm:text-[13px] font-mono font-black tracking-[0.14em] sm:tracking-[0.2em] text-[#ff3b53] uppercase leading-5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              NEW YORK · UNITED STATES · GLOBAL OPPORTUNITIES
            </span>
          </div>

          {/* Heading - Single line on desktop, high-impact bold */}
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black leading-tight tracking-tight text-white mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] lg:whitespace-nowrap">
            Capital for{' '}
            <span className="text-[#8c1627] drop-shadow-[0_0_25px_rgba(140,22,39,0.7)]">
              What&apos;s Next
            </span>
          </h1>

          {/* Subtitle - Bold, high-contrast, crystal clear */}
          <p className="font-red-hat text-white text-[15px] sm:text-[17px] lg:text-[19px] leading-[1.65] max-w-[660px] mb-8 font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            At the intersection of investment, artificial intelligence and digital financial
            infrastructure, Linkay Ventures supports ambitious companies and asset owners with
            venture capital, strategic advisory and real-world asset tokenization.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm sm:text-[15px] font-bold px-8 py-3.5 sm:py-4 rounded-full shadow-xl shadow-[#9F1D2C]/40 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <span>Explore Our Platform</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#060a14] hover:bg-[#101a2a] text-white border-2 border-[#334155] hover:border-[#8c1627] font-poppins text-sm sm:text-[15px] font-bold px-7 py-3.5 sm:py-4 rounded-full shadow-lg backdrop-blur-md transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Start a Conversation</span>
            </Link>
          </div>

          {/* Trust Chips Line */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060a14]/95 border border-[#334155] shadow-md backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8c1627] shadow-[0_0_8px_rgba(140,22,39,0.8)]" />
              <span>Venture Capital</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060a14]/95 border border-[#334155] shadow-md backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8c1627] shadow-[0_0_8px_rgba(140,22,39,0.8)]" />
              <span>Strategic Advisory</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060a14]/95 border border-[#334155] shadow-md backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8c1627] shadow-[0_0_8px_rgba(140,22,39,0.8)]" />
              <span>Digital Assets</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM CAPABILITIES TICKER STRIP (RUNNING MARQUEE)
      ============================================================ */}
      <div className="relative z-10 w-full border-t border-[#1f293d] bg-[#050914]/95 backdrop-blur-md py-3 sm:py-3.5 overflow-hidden select-none">
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#030712] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#030712] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {/* Track 1 */}
          <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={`track1-${idx}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
                <span className="text-[11px] sm:text-[12.5px] font-mono font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#9aacc6] hover:text-[#8c1627] transition-colors cursor-default uppercase">
                  {item}
                </span>
                <span className="text-[#9F1D2C]/70 text-xs sm:text-sm font-bold">|</span>
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
                <span className="text-[11px] sm:text-[12.5px] font-mono font-semibold tracking-[0.16em] sm:tracking-[0.2em] text-[#9aacc6] hover:text-[#8c1627] transition-colors cursor-default uppercase">
                  {item}
                </span>
                <span className="text-[#9F1D2C]/70 text-xs sm:text-sm font-bold">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
