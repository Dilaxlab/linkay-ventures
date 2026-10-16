import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Image from 'next/image';
import BlogPostsSection from '@/components/BlogPostsSection';
import BlogNewsletterSection from '@/components/BlogNewsletterSection';

export const metadata: Metadata = {
  title: 'Insights | Venture, Digital Assets and RWA Perspectives | Linkay Ventures',
  description:
    'Perspectives on venture capital, AI, digital assets and real-world asset tokenization from the Linkay Ventures team.',
};

export default function BlogPage() {
  return (
    <main className="w-full bg-page-gradient text-[#004a80] font-sans antialiased overflow-x-hidden selection:bg-[#A12B3C] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full min-h-[calc(100vh-88px)] flex items-center justify-center bg-transparent text-[#004a80] border-b border-[#C5CDD7]/80 overflow-hidden">
        {/* ============================================================
      FULL-BLEED BACKGROUND IMAGE WITH ELEGANT LIGHT SHADES
  ============================================================ */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-transparent pointer-events-none">
          <Image
            src="/images/LV1.png"
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

        {/* Content - Centered */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#A12B3C] uppercase flex items-center gap-2">
                <span>—</span> INSIGHTS
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              Insights for{' '}
              <span className="text-[#A12B3C] drop-shadow-[0_0_20px_rgba(161,43,60,0.35)]">
                what&apos;s next.
              </span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#004a80] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Perspectives on venture capital, digital assets, AI and real-world asset
              infrastructure from the Linkay Ventures team.
            </p>

            <span>Adaptive Growth</span>

            {/* Features strip */}
            <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d] pt-8">
              {/* Trust Chips Line */}
              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Operator Analysis</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Market Perspective</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A12B3C] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Emerging Infrastructure</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. BLOG POSTS GRID WITH INTERACTIVE FILTERS                    */}
      {/* ============================================================== */}
      <BlogPostsSection />

      {/* ============================================================== */}
      {/* 3. NEWSLETTER SECTION                                          */}
      {/* ============================================================== */}
      <BlogNewsletterSection />
    </main>
  );
}
