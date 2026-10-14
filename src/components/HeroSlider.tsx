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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/token-orbit-blue.jpg"
          alt="Real Assets Token Orbit"
          fill
          priority
          quality={95}
          className="object-cover object-right md:object-center lg:object-right"
          sizes="100vw"
        />

        {/* Ambient Dark Gradients for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/85 to-transparent md:w-[75%] lg:w-[65%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-transparent to-[#030712] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00e5ff]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* ============================================================
          MAIN HERO CONTENT OVERLAY
      ============================================================ */}
      <div className="relative z-10 max-w-[1340px] w-full mx-auto px-5 sm:px-12 lg:px-16 pt-14 sm:pt-20 pb-12 sm:pb-16 flex-1 flex items-center">
        <div className="max-w-[720px] xl:max-w-[800px] flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6 flex items-start gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold text-[#9F1D2C] leading-5 shrink-0">
              —
            </span>
            <span className="text-[11px] sm:text-[13px] font-mono font-bold tracking-[0.12em] sm:tracking-[0.2em] text-[#9F1D2C] uppercase leading-5">
              NEW YORK · UNITED STATES · GLOBAL OPPORTUNITIES
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-poppins text-[32px] sm:text-5xl lg:text-[68px] xl:text-[76px] font-bold leading-[1.15] tracking-tight text-white mb-5 sm:mb-6">
            Capital for{' '}
            <span className="text-[#00e5ff] drop-shadow-[0_0_25px_rgba(0,229,255,0.45)]">
              what&apos;s next.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-red-hat text-[#cad5e8] text-sm sm:text-lg lg:text-[19px] leading-relaxed max-w-[650px] mb-7 sm:mb-9 font-normal">
            At the intersection of investment, artificial intelligence and digital financial
            infrastructure, Linkay Ventures supports ambitious companies and asset owners with
            venture capital, strategic advisory and real-world asset tokenization.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm sm:text-[15px] font-semibold px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-[#9F1D2C]/30 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <span>Explore Our Platform</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#080d1a]/85 hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-sm sm:text-[15px] font-semibold px-7 py-3.5 sm:py-4 rounded-full shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Start a Conversation</span>
            </Link>
          </div>

          {/* Trust Chips Line */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono font-medium text-[#cad5e8]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080d1a]/85 border border-[#1f293d] shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              <span>Venture Capital</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080d1a]/85 border border-[#1f293d] shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              <span>Strategic Advisory</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080d1a]/85 border border-[#1f293d] shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              <span>Digital Assets</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM CAPABILITIES TICKER STRIP
      ============================================================ */}
      <div className="relative z-10 w-full border-t border-[#1f293d] bg-[#050914]/90 backdrop-blur-md py-3 sm:py-3.5 px-4 sm:px-12 lg:px-16 overflow-x-auto no-scrollbar">
        <div className="max-w-[1340px] mx-auto flex items-center justify-center sm:justify-between gap-y-2 gap-x-4 sm:gap-x-6 text-center min-w-max sm:min-w-0">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 sm:gap-4 shrink-0">
              <span className="text-[11px] sm:text-[12px] font-mono font-medium tracking-wider text-[#9aacc6] hover:text-[#00e5ff] transition-colors cursor-default uppercase">
                {item}
              </span>
              {idx < tickerItems.length - 1 && (
                <span className="text-[#233049] text-xs">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
