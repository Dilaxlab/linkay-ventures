import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import BlogPostsSection from '@/components/BlogPostsSection';
import BlogNewsletterSection from '@/components/BlogNewsletterSection';

export const metadata: Metadata = {
  title: 'Insights | Venture, Digital Assets and RWA Perspectives | Linkay Ventures',
  description:
    'Perspectives on venture capital, AI, digital assets and real-world asset tokenization from the Linkay Ventures team.',
};

export default function BlogPage() {
  return (
    <main className="w-full bg-[#030712] text-[#f4f7ff] font-sans antialiased overflow-x-hidden selection:bg-[#9F1D2C] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full pt-28 pb-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[350px] bg-[#8c1627]/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[450px] h-[300px] bg-[#9F1D2C]/15 blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> INSIGHTS
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              Insights for{' '}
              <span className="text-[#8c1627] drop-shadow-[0_0_20px_rgba(140,22,39,0.35)]">
                what&apos;s next.
              </span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#9aacc6] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Perspectives on venture capital, digital assets, AI and real-world asset infrastructure from the Linkay Ventures team.
            </p>

            {/* Micro badges / Chips */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#9aacc6]">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </span>
                <span>Operator Analysis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </span>
                <span>Market Perspective</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </span>
                <span>Emerging Infrastructure</span>
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
