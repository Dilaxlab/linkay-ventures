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
    <main className="w-full bg-[#030712] text-[#f4f7ff] font-sans antialiased overflow-x-hidden selection:bg-[#9F1D2C] selection:text-white">

      {/* ============================================================== */}
      {/* 1. PAGE HERO                                                   */}
      {/* ============================================================== */}
      <section className="relative w-full pt-28 pb-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[350px] bg-[#8c1627]/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[450px] h-[300px] bg-[#9F1D2C]/15 blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> ABOUT LINKAY VENTURES
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-3xl sm:text-5xl lg:text-[70px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Built by founders,{' '}
              <span className="text-[#8c1627] drop-shadow-[0_0_25px_rgba(140,22,39,0.35)]">
                for founders.
              </span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg lg:text-[22px] leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto">
              Linkay Ventures is a New York-based firm combining venture funding, financial advisory, and real-world asset tokenization to help ambitious companies grow.
            </p>

            {/* Micro badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono text-[#cad5e8]">
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#080d1a] border border-[#1f293d]">
                New York Headquarters
              </span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#080d1a] border border-[#1f293d]">
                Operator-Led Firm
              </span>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#080d1a] border border-[#1f293d]">
                Multi-Asset Platform
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. OUR STORY (01 / OUR STORY)                                  */}
      {/* ============================================================== */}
      <section className="w-full bg-[#050814] py-14 sm:py-20 px-5 sm:px-12 lg:px-16 border-b border-[#1f293d] relative">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span>OUR STORY
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Founded to back <br />
                <span className="text-[#8c1627] drop-shadow-[0_0_20px_rgba(140,22,39,0.25)]">bold ideas.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 font-red-hat text-[#cad5e8] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Linkay Ventures was founded with a singular purpose: to support groundbreaking ideas and the visionary founders who want to make a difference.
              </p>
              <p>
                Our journey began with a commitment to impact-driven investment. Today, it has grown into a platform that brings financial resources and strategic insight together, helping founders turn ambition into lasting companies.
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
                  <span className="text-sm font-poppins font-bold text-[#8c1627]">Strategic Insight</span>
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
      <section className="w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> GUIDING PRINCIPLES
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Mission &amp; Core Values
            </h2>
            <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg">
              The foundational standards that govern how we partner, invest, and build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg shadow-black/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#8c1627] font-semibold">
                        {val.tag}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 text-[#8c1627] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="font-poppins text-2xl font-bold text-white mb-3 group-hover:text-[#8c1627] transition-colors">
                      {val.title}
                    </h3>

                    <p className="font-poppins text-base font-medium text-[#f4f7ff] mb-4">
                      {val.description}
                    </p>

                    <p className="font-red-hat text-[#9aacc6] text-sm leading-relaxed">
                      {val.details}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#1f293d] flex items-center gap-2 text-xs font-mono text-[#71829e]">
                    <CheckCircle2 size={13} className="text-[#8c1627]" />
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
      <section className="w-full bg-[#050814] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span> PRACTICE AREAS
                </span>
              </div>
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                What We Do
              </h2>
              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg max-w-2xl">
                Four connected capabilities designed to fund, guide, and scale modern commercial enterprises.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-md shadow-[#9F1D2C]/30 shrink-0 hover:-translate-y-0.5"
            >
              <span>See All Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeDoLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 text-[#8c1627] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={19} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71829e] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-poppins text-xl font-bold text-white mb-2 group-hover:text-[#8c1627] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-[#9aacc6] text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8c1627] group-hover:underline">
                    <span>Learn More</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
      <section className="w-full bg-[#050814] py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9F1D2C]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-[960px] mx-auto text-center relative z-10">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
              <span>—</span> LET&apos;S BUILD TOGETHER
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Let&apos;s talk about what you&apos;re building.
          </h2>

          <p className="font-red-hat text-[#9aacc6] text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Whether you are raising growth capital, scaling an enterprise, or tokenizing an institutional asset, we would love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-8 py-3.5 sm:px-9 sm:py-4 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#8c1627]/50 font-poppins text-sm font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
