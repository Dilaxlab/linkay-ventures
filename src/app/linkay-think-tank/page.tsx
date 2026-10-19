import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cpu,
  Droplets,
  Globe,
  Lightbulb,
  LineChart,
  Network,
  ShieldCheck,
  Target,
  Zap,
  Check,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Linkay Think-Tank – Linkay Ventures',
  description:
    "Harness Global Expertise to Solve Tomorrow's Challenges with Linkay Think Tank — cross-disciplinary strategy and techno-commercial foresight.",
};

export default function LinkayThinkTankPage() {
  const domains = [
    {
      title: 'Energy & Climate Resilience',
      desc: 'We assist enterprises and governments in accelerating renewable energy adoption, decarbonizing mission-critical operations, and formulating adaptive climate strategies.',
      icon: Zap,
      tag: 'Energy',
    },
    {
      title: 'Water & Resource Security',
      desc: 'We advise on sustainable resource governance, equitable distribution frameworks, and resilient supply infrastructure for essential utilities.',
      icon: Droplets,
      tag: 'Resources',
    },
    {
      title: 'Digital & AI Transformation',
      desc: 'Guiding organizations through paradigm shifts — optimizing workflow architectures, modernizing data systems, and deploying enterprise-grade intelligence.',
      icon: Cpu,
      tag: 'Digital',
    },
    {
      title: 'Infrastructure Resilience',
      desc: 'From structural design to systemic governance, we design adaptive institutional models engineered to resist macroeconomic and technological shocks.',
      icon: Building2,
      tag: 'Infrastructure',
    },
    {
      title: 'Techno-Commercial Structuring',
      desc: 'Bridging engineering feasibility with institutional finance — ensuring transformational models are both commercially viable and capital-efficient.',
      icon: LineChart,
      tag: 'Commercial',
    },
  ];

  const approach = [
    {
      title: 'Global Expert Collective',
      desc: 'A curated network of veteran strategists, technologists, economists, and domain specialists across key global hubs.',
      icon: Globe,
      tag: 'Worldwide',
    },
    {
      title: 'Cross-Disciplinary Rigor',
      desc: 'Synthesizing multi-domain engineering, financial, and policy frameworks to solve multifaceted challenges.',
      icon: Network,
      tag: 'Integrated',
    },
    {
      title: 'Future-Focused Horizon',
      desc: 'Anticipating technological and regulatory disruption to construct robust, forward-looking operational roadmaps.',
      icon: Lightbulb,
      tag: 'Vision',
    },
    {
      title: 'Actionable Execution',
      desc: 'Translating research and theoretical strategy into implementable, measurable governance and commercial outcomes.',
      icon: Target,
      tag: 'Impact',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Diagnostic Framing',
      desc: 'Comprehensive mapping of structural challenges, regulatory context, and stakeholder dynamics to establish exact problem parameters.',
      icon: Target,
      tag: 'Framing',
    },
    {
      num: '02',
      title: 'Deep Multi-Angle Analysis',
      desc: 'Mobilizing global subject-matter specialists to scrutinize technical feasibility, risk boundaries, and financial mechanics.',
      icon: Lightbulb,
      tag: 'Insight',
    },
    {
      num: '03',
      title: 'Co-Design & Validation',
      desc: 'Formulating tailored, resilient solutions in direct collaboration with client leadership, stress-testing every variable.',
      icon: Network,
      tag: 'Co-Create',
    },
    {
      num: '04',
      title: 'Deployment Roadmap',
      desc: 'Delivering concrete implementation playbooks, milestone metrics, and transitional governance to execute measurable impact.',
      icon: Zap,
      tag: 'Execution',
    },
  ];

  return (
    <main className="w-full bg-page-gradient text-[#004a80] font-sans antialiased overflow-x-hidden selection:bg-[#9F1D2C] selection:text-white">
      {/* ============================================================
          1. HERO BANNER
      ============================================================ */}
      <div className="relative w-full overflow-hidden border-b border-[#1f293d] bg-page-gradient text-[#f4f7ff]">
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
          <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center px-4 sm:px-6 text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> LINKAY VENTURES GROUP · STRATEGIC FORESIGHT
              </span>
            </div>

            {/* Logo without background or border */}
            <div className="relative w-[180px] h-[90px] sm:w-[240px] sm:h-[120px] md:w-[260px] md:h-[130px] mb-6">
              <Image
                src="/images/logothink.png"
                alt="Linkay Think-Tank"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 180px, 260px"
              />
            </div>

            {/* Heading */}
            <h1 className="mb-5 font-poppins text-[32px] sm:text-[46px] md:text-[54px] lg:text-[68px] font-bold leading-[1.12] tracking-tight text-white">
              Linkay <span className="text-[#894541]">Think-Tank</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-10 max-w-[640px] font-red-hat text-[15px] sm:text-[18px] md:text-[20px] lg:max-w-[820px] lg:text-[22px] font-normal leading-relaxed text-[#004a80]">
              A global collective of strategists, technologists, and domain authorities — bridging
              bold ideas into action for a resilient, sustainable, and technologically sovereign
              future.
            </p>

            {/* Buttons (Capsule Pills) */}
            <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="https://linkaythinktank.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
              >
                <span>Explore Think-Tank Portal</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="#domains"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#004a80] bg-[#DDE2E8] hover:bg-[#004a80] px-8 py-4 font-poppins text-sm font-bold text-[#004a80] hover:text-white shadow-md transition-all sm:w-auto hover:-translate-y-0.5"
              >
                <span>Advisory Domains</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Feature strip */}
            <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d] pt-8">
              {/* Trust Chips Line */}
              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Global Expert Network</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Cross-Disciplinary Rigor</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Execution-Ready Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================
          2. INTRO SPLIT — About the Think-Tank
      ============================================================ */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2 mb-3">
              <span>—</span> STRATEGIC RESEARCH COLLECTIVE
            </span>
            <h2 className="font-poppins text-white text-[32px] sm:text-[42px] font-bold leading-tight mb-5">
              Harness Global Expertise to Solve Tomorrow&apos;s Complex Challenges
            </h2>

            <p className="font-red-hat text-[#004a80] text-[16px] sm:text-[18px] leading-relaxed mb-5">
              Linkay Think-Tank convenes researchers, technologists, capital allocators, and
              industry operators into a unified advisory collective.
            </p>
            <p className="font-red-hat text-[#004a80] text-[16px] sm:text-[18px] leading-relaxed">
              We partner with visionary enterprises, institutions, and family offices to structure
              resilient technologies, sustainable energy ecosystems, and forward-looking economic
              models — translating emerging paradigms into actionable reality.
            </p>

            {/* Quick highlight chips */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {[
                'Energy Systems',
                'Digital Sovereignty',
                'Resource Economics',
                'Institutional Governance',
                'Capital Design',
              ].map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm text-xs font-mono font-bold text-[#004a80]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Logo panel (clean without background or border) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center py-6">
            <div className="relative w-full max-w-[340px] h-[180px] sm:h-[220px]">
              <Image
                src="/images/logothink.png"
                alt="Linkay Think-Tank Logo"
                fill
                className="object-contain transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 320px, 340px"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-[#894541] font-bold">
                Global Research &amp; Advisory Group
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. WHAT WE DO — Five Strategic Domains
      ============================================================ */}
      <section
        id="domains"
        className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#050814] border-t border-b border-[#1f293d]"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#f7f6f6] uppercase flex items-center justify-center gap-2 mb-3">
              <span>—</span> CORE RESEARCH PILLARS
            </span>

            <h2 className="font-poppins text-white text-[32px] sm:text-[44px] font-bold leading-[1.15] tracking-tight mb-4">
              Five Domains, One Cohesive Mission
            </h2>

            <p className="font-red-hat text-[#004a80] text-[16px] sm:text-[17px] leading-relaxed max-w-[700px] mx-auto">
              We bring mathematical rigor, technological depth, and practical execution capacity to
              every systemic challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {domains.map((item, idx) => {
              const IconComp = item.icon;
              const isLastTwo = idx >= domains.length - 2;

              return (
                <div
                  key={idx}
                  className={`group bg-[#080d1a] p-6 rounded-2xl border border-[#1f293d] hover:border-[#894541]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[#894541]/5 hover:-translate-y-1 ${
                    isLastTwo ? 'lg:col-span-3' : 'lg:col-span-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#894541]/10 border border-[#894541]/25 flex items-center justify-center text-[#ffffff] group-hover:scale-110 transition-transform">
                        <IconComp size={20} />
                      </div>
                      <span className="text-[11px] font-mono text-[#894541] bg-[#030712] px-2.5 py-0.5 rounded-full border border-[#1f293d]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[19px] font-bold mb-2 group-hover:text-[#894541] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-[#9aacc6] text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#1f293d] flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#9aacc6]">
                      Domain 0{idx + 1}
                    </span>
                    <span className="text-xs text-[#ffffff] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Strategy →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. OUR APPROACH — Turning Insight into Impact
      ============================================================ */}
      <section className="w-full bg-transparent py-24 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2 mb-3">
                <span>—</span> METHODOLOGY
              </span>
              <h2 className="font-poppins text-white text-[32px] sm:text-[44px] font-bold leading-tight max-w-[700px]">
                How We Turn Insight into Scalable Impact
              </h2>
            </div>
            <p className="font-red-hat text-[#004a80] text-sm sm:text-base max-w-[420px]">
              Combining strategic theory with real-world technological and capital deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approach.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#080d1a] hover:bg-[#0d1627] p-6 rounded-2xl border border-[#1f293d] hover:border-[#894541]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#894541]/5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#894541]/10 border border-[#894541]/25 flex items-center justify-center text-[#f8f6f6] group-hover:scale-110 transition-transform">
                        <IconComp size={19} />
                      </div>
                      <span className="text-[11px] font-mono text-[#9aacc6] bg-[#030712] px-2.5 py-0.5 rounded-full border border-[#1f293d]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[18px] font-bold mb-2 group-hover:text-[#894541] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-[#9aacc6] text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. ENGAGEMENT FLOW — From Challenge to Action
      ============================================================ */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto border-t border-[#1f293d]">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> ADVISORY LIFECYCLE
          </span>
          <h2 className="font-poppins text-white text-[32px] sm:text-[44px] font-bold leading-tight mb-4">
            From Initial Challenge to Practical Action
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="group bg-[#080d1a] p-6 rounded-2xl border border-[#1f293d] hover:border-[#894541]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#894541]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#894541]/10 border border-[#894541]/25 flex items-center justify-center text-[#fcfaf9] group-hover:scale-110 transition-transform">
                      <IconComp size={19} />
                    </div>
                    <span className="font-poppins text-[24px] font-extrabold leading-none text-[#fdfdfd]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-poppins text-white text-[18px] font-bold mb-2 group-hover:text-[#894541] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-red-hat text-white text-[14px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1f293d]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#894541]">
                    {step.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          6. BOTTOM CTA — Institutional Banner
      ============================================================ */}
      <section className="w-full px-6 sm:px-12 lg:px-16 pb-24 max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080d1a] text-white border border-[#1f293d] text-center relative max-w-[960px] mx-auto overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#894541]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#9F1D2C]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-white uppercase block mb-3">
              — LINKAY THINK-TANK ADVISORY
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Tackle Your Greatest Challenges?
            </h3>
            <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base mb-8 leading-relaxed">
              Let&apos;s build your pathway to the future — together with our global network of
              strategists, technologists, and domain authorities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://linkaythinktank.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] !text-[#004a80] hover:!text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Launch Think-Tank Research Portal</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] !text-[#004a80] hover:!text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                Schedule Strategic Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
