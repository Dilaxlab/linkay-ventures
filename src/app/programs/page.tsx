import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Layers,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Programs | Venture Accelerator and Corporate Innovation | Linkay Ventures',
  description:
    'Explore Linkay Ventures programs: a venture accelerator, corporate innovation partnerships and adaptive growth support for ambitious founders.',
};

export default function ProgramsPage() {
  const acceleratorCards = [
    {
      title: 'Mentorship',
      tag: 'Mentors',
      description:
        'Direct access to experienced operators, serial entrepreneurs and investors.',
      icon: Users,
    },
    {
      title: 'Capital Connections',
      tag: 'Capital',
      description:
        'Introductions to venture investors, angels and corporate partners within our network.',
      icon: TrendingUp,
    },
    {
      title: 'Go-to-Market Support',
      tag: 'GTM',
      description:
        'Guidance on market expansion, product positioning and scaling operations.',
      icon: Rocket,
    },
    {
      title: 'Pilots & Partnerships',
      tag: 'Pilots',
      description:
        'Opportunities to validate and commercialize solutions with enterprise partners.',
      icon: Globe2,
    },
  ];

  const corporateCards = [
    {
      title: 'Technology Integration',
      tag: 'Co-Develop',
      description:
        'Co-develop solutions with established enterprises and industry leaders.',
      icon: Layers,
    },
    {
      title: 'Market Validation',
      tag: 'Validate',
      description:
        'Test and refine innovations in real commercial environments.',
      icon: ShieldCheck,
    },
    {
      title: 'Scaling Support',
      tag: 'Scale',
      description:
        'Access corporate partners, industry networks and funding opportunities.',
      icon: TrendingUp,
    },
  ];

  const adaptiveCards = [
    {
      title: 'Technology & Infrastructure',
      tag: 'Tech Stack',
      description:
        'Access to technology and infrastructure resources through our partners.',
      icon: Cpu,
    },
    {
      title: 'Real-World Pilots',
      tag: 'Pilots',
      description:
        'Pilot opportunities in strategic industries.',
      icon: Rocket,
    },
    {
      title: 'Global Networks',
      tag: 'Network',
      description:
        'Connections to decision-makers and investors worldwide.',
      icon: Globe2,
    },
  ];

  return (
    <main className="w-full bg-[#030712] text-[#f4f7ff] font-sans antialiased overflow-x-hidden selection:bg-[#9F1D2C] selection:text-white">

      {/* ============================================================== */}
      {/* 1. HERO                                                        */}
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
                <span>—</span> OUR PROGRAMS
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-3xl sm:text-5xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.1] mb-6">
              Programs for founders{' '}
              <span className="text-[#8c1627] drop-shadow-[0_0_25px_rgba(140,22,39,0.35)]">
                building what&apos;s next.
              </span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto">
              Linkay Ventures supports the next generation of innovators through a venture accelerator, corporate innovation partnerships and adaptive growth programs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mb-10 max-w-md sm:max-w-none mx-auto">
              <Link
                href="/contact?subject=Program%20Application"
                className="inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-8 py-3.5 sm:px-9 sm:py-4 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Apply to a Program</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#programs"
                className="inline-flex items-center justify-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-white border border-[#233049] hover:border-[#8c1627]/50 font-poppins text-sm font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore Programs</span>
              </Link>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-medium tracking-wider text-[#9aacc6]">
              <div className="flex items-center gap-2">
                <span className="text-[#8c1627]">•</span>
                <span>Venture Accelerator</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8c1627]">•</span>
                <span>Corporate Partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8c1627]">•</span>
                <span>Adaptive Growth</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. INTRO (01 / OUR PROGRAMS)                                   */}
      {/* ============================================================== */}
      <section className="w-full bg-[#050814] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span>OUR PROGRAMS
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                We don&apos;t just back startups.{' '}
                <span className="text-[#9aacc6] block sm:inline">We build alongside them.</span>
              </h2>

              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Our programs give ambitious founders the network, resources and strategic support to turn bold ideas into lasting companies. Join a community of builders and grow with programs designed for impact.
              </p>

              <div className="flex items-center gap-3 text-xs font-mono text-[#cad5e8] pt-2">
                <span className="w-2 h-2 rounded-full bg-[#8c1627] animate-pulse" />
                <span>Operator-Led Cohorts · High-Touch Mentorship</span>
              </div>
            </div>

            {/* Preserving existing image /images/program.jpeg with dark frame */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-2xl p-2 group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/program.jpeg"
                    alt="Empowering Innovators"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PROGRAM 01 / VENTURE ACCELERATOR                            */}
      {/* ============================================================== */}
      <section className="w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]" id="programs">
        <div className="max-w-[1340px] mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span>VENTURE ACCELERATOR
                </span>
                <span className="px-3 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-xs font-mono text-[#cad5e8]">
                  Applications Open
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                For early-stage startups{' '}
                <span className="text-[#9aacc6] block sm:inline">ready to scale.</span>
              </h2>

              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg font-normal">
                A hands-on program combining mentorship, capital connections, go-to-market guidance and enterprise pilot opportunities.
              </p>
            </div>

            <Link
              href="/contact?subject=Accelerator%20Cohort%20Application"
              className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-md shadow-[#9F1D2C]/30 shrink-0 hover:-translate-y-0.5"
            >
              <span>Apply to Our Next Cohort</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {acceleratorCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 text-[#8c1627] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={19} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-[#71829e]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#8c1627] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-red-hat text-[#9aacc6] text-xs sm:text-[13px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#1f293d] flex items-center gap-1.5 text-xs text-[#cad5e8]">
                    <CheckCircle2 size={12} className="text-[#8c1627]" />
                    <span>Cohort Benefit</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PROGRAM 02 / CORPORATE INNOVATION PARTNERSHIPS               */}
      {/* ============================================================== */}
      <section className="w-full bg-[#050814] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span>CORPORATE INNOVATION PARTNERSHIPS
              </span>
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Where startups and enterprises{' '}
              <span className="text-[#9aacc6] block sm:inline">co-create.</span>
            </h2>

            <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg font-normal">
              We connect corporations with emerging startups to build high-impact collaborations that drive industry change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {corporateCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 text-[#8c1627] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={19} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-[#71829e]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-xl font-bold text-white mb-3 group-hover:text-[#8c1627] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-red-hat text-[#9aacc6] text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#1f293d] flex items-center gap-1.5 text-xs text-[#cad5e8]">
                    <CheckCircle2 size={12} className="text-[#8c1627]" />
                    <span>Commercial Alignment</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="https://hub.linkayventures.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-white border border-[#233049] hover:border-[#8c1627]/50 font-poppins text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-md"
            >
              <span>Access Venture HUB</span>
              <ArrowUpRight size={15} className="text-[#8c1627]" />
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. PROGRAM 03 / ADAPTIVE GROWTH PROGRAMS                       */}
      {/* ============================================================== */}
      <section className="w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-14">

            {/* Preserving existing image /images/program3.jpeg with dark frame */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-2xl p-2 group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/program3.jpeg"
                    alt="Adaptive Growth Programs"
                    fill
                    priority
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span>ADAPTIVE GROWTH PROGRAMS
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Support that adapts{' '}
                <span className="text-[#9aacc6] block sm:inline">to every stage.</span>
              </h2>

              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Beyond the standard accelerator, we shape bespoke programs to equip, pilot and connect founders wherever they are on their journey.
              </p>

              {/* 3 mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {adaptiveCards.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-[#8c1627]/10 border border-[#8c1627]/25 text-[#8c1627] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Icon size={18} />
                        </div>
                        <h3 className="font-poppins text-sm font-bold text-white mb-1.5 leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-red-hat text-xs text-[#9aacc6] leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. CLOSING CTA                                                 */}
      {/* ============================================================== */}
      <section className="w-full bg-[#050814] py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9F1D2C]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-[960px] mx-auto text-center relative z-10">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
              <span>—</span> JOIN THE MOVEMENT
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Ready to build what&apos;s next?
          </h2>

          <p className="font-red-hat text-[#9aacc6] text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            A startup pushing boundaries, a corporation seeking to innovate, or a visionary ready to make an impact? Start here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?subject=Join%20Linkay%20Ventures"
              className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-8 py-3.5 sm:px-9 sm:py-4 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
            >
              <span>Join With Us</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-white border border-[#233049] hover:border-[#8c1627]/50 font-poppins text-sm font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              <span>Talk to an Expert</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
