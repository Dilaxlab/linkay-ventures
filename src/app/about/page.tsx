import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Coins,
  Compass,
  HeartHandshake,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AboutLeadershipSection from '@/components/AboutLeadershipSection';

export const metadata: Metadata = {
  title: 'About Linkay Ventures | Venture Funding and Tokenization, New York',
  description:
    'Meet the team behind Linkay Ventures. We help founders raise capital, close deals, and tokenize real-world assets.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Founder-first',
      tag: 'Partnership',
      description: "We back founders the way we'd want to be backed.",
      details:
        'We provide hands-on operator guidance, patient capital, and direct access to global networks without unnecessary bureaucratic friction.',
      icon: HeartHandshake,
    },
    {
      title: 'Transparent',
      tag: 'Integrity',
      description: 'Clear terms, honest advice, no surprises.',
      details:
        'We believe enduring partnerships are built on radical candor, clear alignment of incentives, and transparent deal mechanics.',
      icon: ShieldCheck,
    },
    {
      title: 'Forward-looking',
      tag: 'Innovation',
      description: 'We invest in technologies that reshape finance, like AI and tokenization.',
      details:
        'We engineer systems for the next decade of capital formation—bridging physical asset values with modern programmable infrastructure.',
      icon: Sparkles,
    },
  ];

  const whatWeDoLinks = [
    {
      title: 'Funds',
      category: 'Venture & Growth',
      description: 'Strategic growth capital and private market syndication for high-growth tech firms.',
      href: '/services',
      icon: TrendingUp,
    },
    {
      title: 'Bonds',
      category: 'Fixed Income',
      description: 'Structured debt financing, credit instruments, and yield-bearing capital structures.',
      href: '/services',
      icon: LineChart,
    },
    {
      title: 'M&A',
      category: 'Corporate Advisory',
      description: 'Cross-border mergers, strategic acquisitions, and corporate growth advisory.',
      href: '/services',
      icon: Compass,
    },
    {
      title: 'RWA Tokenization',
      category: 'Digital Infrastructure',
      description: 'Converting real-world assets into liquid, programmable, compliant digital securities.',
      href: '/rwa-tokenization',
      icon: Coins,
    },
  ];

  return (
    <main className="w-full bg-page-gradient text-[#004a80] font-sans antialiased overflow-x-hidden selection:bg-[#894541] selection:text-white">
      {/* ============================================================== */}
      {/* 1. PAGE HERO                                                   */}
      {/* ============================================================== */}
      <section className="relative w-full min-h-[calc(100vh-88px)] flex items-center justify-center bg-transparent text-[#004a80] border-b border-[#C5CDD7]/80 overflow-hidden">
        {/* ============================================================
      FULL-BLEED BACKGROUND IMAGE WITH ELEGANT LIGHT SHADES
  ============================================================ */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-transparent pointer-events-none">
          <Image
            src="/images/LV2.png"
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
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                <span>—</span> ABOUT LINKAY VENTURES
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-3xl sm:text-5xl lg:text-[70px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Built by founders, <span className="text-[#894541] ">for founders.</span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#004a80] text-base sm:text-lg lg:text-[22px] leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto">
              Linkay Ventures is a New York-based firm combining venture funding, financial
              advisory, and real-world asset tokenization to help ambitious companies grow.
            </p>

            {/* Features strip */}
            <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d] pt-8">
              {/* Trust Chips Line */}
              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>New York Headquarters</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Operator-Led Firm</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Multi-Asset Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OUR STORY (01 / OUR STORY)                                  */}
      {/* ============================================================== */}
      <section className="w-full bg-transparent py-14 sm:py-20 px-5 sm:px-12 lg:px-16 border-b border-[#1f293d] relative">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                  <span>—</span>OUR STORY
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Founded to back <br />
                <span className="text-[#894541] drop-shadow-[0_0_20px_rgba(161, 43, 60,0.25)]">
                  bold ideas.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 font-red-hat text-[#004a80] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Linkay Ventures was founded with a singular purpose: to support groundbreaking ideas
                and the visionary founders who want to make a difference.
              </p>
              <p>
                Our journey began with a commitment to impact-driven investment. Today, it has grown
                into a platform that brings financial resources and strategic insight together,
                helping founders turn ambition into lasting companies.
              </p>

              {/* Quick-scan chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#1f293d]">
                <div className="p-3.5 rounded-xl bg-[#080d1a] border border-[#1f293d] flex flex-col">
                  <span className="text-sm font-poppins font-bold text-white">Impact-Driven</span>
                  <span className="text-xs text-[#8a9bb5] font-red-hat">Investment</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d1a] border border-[#1f293d] flex flex-col">
                  <span className="text-sm font-poppins font-bold text-white">Founder-First</span>
                  <span className="text-xs text-[#8a9bb5] font-red-hat">Support</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d1a] border border-[#1f293d] flex flex-col">
                  <span className="text-sm font-poppins font-bold text-white">
                    Strategic Insight
                  </span>
                  <span className="text-xs text-[#8a9bb5] font-red-hat">With capital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. MISSION AND VALUES                                          */}
      {/* ============================================================== */}
      <section className="w-full bg-transparent py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                <span>—</span> GUIDING PRINCIPLES
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Mission &amp; Core Values
            </h2>
            <p className="font-red-hat text-[#004a80] text-base sm:text-lg">
              The foundational standards that govern how we partner, invest, and build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#004a80] border-2 border-[#003860] hover:border-white/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl text-white"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="px-3 py-1 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] text-[#01497f] font-bold text-[11px] font-mono uppercase tracking-widest shadow-sm"
                        style={{ color: '#01497f' }}
                      >
                        {val.tag}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="font-poppins text-2xl font-bold text-white mb-3 group-hover:text-[#ffccd3] transition-colors">
                      {val.title}
                    </h3>

                    <p className="font-poppins text-base font-medium text-white mb-4">
                      {val.description}
                    </p>

                    <p className="font-red-hat text-[#cad8e9] text-sm leading-relaxed">
                      {val.details}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/15 flex items-center gap-2 text-xs font-mono text-[#cad8e9]">
                    <CheckCircle2 size={13} className="text-white" />
                    <span>Non-Negotiable Commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. WHAT WE DO                                                  */}
      {/* ============================================================== */}
      <section className="w-full bg-transparent py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                  <span>—</span> PRACTICE AREAS
                </span>
              </div>
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                What We Do
              </h2>
              <p className="font-red-hat text-[#004a80] text-base sm:text-lg max-w-2xl">
                Four connected capabilities designed to fund, guide, and scale modern commercial
                enterprises.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>See All Services</span>
              <ArrowRight size={15} style={{ color: '#ffffff' }} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeDoLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#894541]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#894541]/10 border border-[#894541]/25 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={19} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71829e] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-poppins text-xl font-bold text-white mb-2 group-hover:text-[#894541] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-[#9aacc6] text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:underline">
                    <span>Learn More</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. LEADERSHIP TEAM                                             */}
      {/* ============================================================== */}
      <AboutLeadershipSection />

      {/* ============================================================== */}
      {/* 6. CLOSING CTA                                                 */}
      {/* ============================================================== */}
      <section className="w-full bg-transparent py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-[960px] mx-auto text-center relative z-10">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
              <span>—</span> LET&apos;S BUILD TOGETHER
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Let&apos;s talk about what you&apos;re building.
          </h2>

          <p className="font-red-hat text-[#004a80] text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Whether you are raising growth capital, scaling an enterprise, or tokenizing an
            institutional asset, we would love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
