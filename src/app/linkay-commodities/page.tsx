import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Factory,
  FileCheck2,
  Flame,
  Gem,
  Globe,
  Handshake,
  ShieldCheck,
  Truck,
  Users,
  Wheat,
  Check,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Linkay Commodities – Linkay Ventures',
  description:
    'Linkay Commodities, your trusted partner in navigating the fast-paced world of physical commodities trading — secure, compliant, and transparent.',
};

export default function LinkayCommoditiesPage() {
  const commodityClasses = [
    {
      title: 'Agricultural Products',
      desc: 'Grains, oils, pulses, and soft commodities sourced from verified global suppliers and verified harvest chains.',
      icon: Wheat,
      tag: 'Agri',
    },
    {
      title: 'Energy & Derivatives',
      desc: 'Crude, refined products, and energy-linked commodities traded under strict regulatory and bilateral compliance.',
      icon: Flame,
      tag: 'Energy',
    },
    {
      title: 'Precious Metals',
      desc: 'Institutional gold, silver, and precious metals with certified chain-of-custody documentation and vault verification.',
      icon: Gem,
      tag: 'Metals',
    },
    {
      title: 'Industrial Raw Materials',
      desc: 'Industrial inputs, ores, and critical base materials for manufacturing, energy transition, and infrastructure.',
      icon: Factory,
      tag: 'Industrial',
    },
  ];

  const advantages = [
    {
      title: 'Verified Counterparty Network',
      desc: 'Every broker, buyer, and seller undergoes stringent institutional KYC, AML, and credit risk assessment.',
      icon: BadgeCheck,
      tag: 'Trust',
    },
    {
      title: 'Cross-Border Trade Corridors',
      desc: 'Established sourcing and distribution routes spanning North America, Europe, the Middle East, and Asia-Pacific.',
      icon: Globe,
      tag: 'Worldwide',
    },
    {
      title: 'Audited & Compliant Settlement',
      desc: 'Fully documented, contract-governed trade flows with complete traceability and secure escrow integration.',
      icon: FileCheck2,
      tag: 'Compliance',
    },
    {
      title: 'Transparent Market Pricing',
      desc: 'Real-time benchmark pricing and clear commercial terms with zero hidden spreads or undisclosed intermediary fees.',
      icon: Activity,
      tag: 'Clarity',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Requirement & Onboarding',
      desc: 'Submit your purchase or supply mandate through our secure institutional onboarding and compliance portal.',
      icon: Users,
      tag: 'Onboard',
    },
    {
      num: '02',
      title: 'Vetting & Matching',
      desc: 'We match your order with verified counterparties and execute preliminary KYC and specification checks.',
      icon: ShieldCheck,
      tag: 'Verification',
    },
    {
      num: '03',
      title: 'Structured Contracting',
      desc: 'Bilateral contracts executed with clear delivery terms, escrow protection, and legal certainty.',
      icon: Handshake,
      tag: 'Contract',
    },
    {
      num: '04',
      title: 'Logistics & Settlement',
      desc: 'End-to-end coordinated shipping, inspection verification, and seamless fund settlement upon arrival.',
      icon: Truck,
      tag: 'Delivery',
    },
  ];

  return (
    <main className="w-full bg-[#030712] text-[#f4f7ff] font-sans antialiased overflow-x-hidden selection:bg-[#9F1D2C] selection:text-white">
      {/* ============================================================
          1. HERO BANNER
      ============================================================ */}
      <div className="relative w-full overflow-hidden border-b border-[#1f293d] bg-[#030712] text-[#f4f7ff]">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#8c1627]/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[300px] bg-[#9F1D2C]/15 blur-[130px] pointer-events-none" />

        <section className="relative z-10 flex h-full w-full items-center justify-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28">
          <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> LINKAY VENTURES GROUP · PHYSICAL COMMODITIES
              </span>
            </div>

            {/* Logo */}
            <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mb-6 p-3 rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-xl">
              <Image
                src="/images/commodities-logo.png"
                alt="Linkay Commodities"
                fill
                priority
                className="object-contain p-3"
                sizes="(max-width: 768px) 150px, 200px"
              />
            </div>

            {/* Heading */}
            <h1 className="mb-5 font-poppins text-[32px] sm:text-[46px] md:text-[54px] lg:text-[68px] font-bold leading-[1.12] tracking-tight text-white">
              Linkay{' '}
              <span className="text-[#8c1627] drop-shadow-[0_0_20px_rgba(140,22,39,0.35)]">
                Commodities
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-10 max-w-[640px] font-red-hat text-[15px] sm:text-[18px] md:text-[20px] lg:max-w-[820px] lg:text-[22px] font-normal leading-relaxed text-[#9aacc6]">
              Your trusted institutional partner in physical commodities trading — secure,
              compliant, and transparent from origin sourcing to international settlement.
            </p>

            {/* Buttons (Capsule Pills) */}
            <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="https://linkaycommodities.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9F1D2C] hover:bg-[#851823] px-8 py-4 font-poppins text-sm font-semibold text-white shadow-lg shadow-[#9F1D2C]/30 transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Explore Commodities Platform</span>
                <ArrowUpRight size={17} />
              </Link>
              <Link
                href="#trade"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#233049] bg-[#080d1a] hover:bg-[#101a2a] px-8 py-4 font-poppins text-sm font-semibold text-[#f4f7ff] shadow-sm transition-all hover:border-[#8c1627]/50 sm:w-auto hover:-translate-y-0.5"
              >
                <span>What We Trade</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Feature strip */}
            <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d] pt-8">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#9aacc6]">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                    <Check size={10} className="stroke-[3]" />
                  </span>
                  <span>Verified Counterparties</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                    <Check size={10} className="stroke-[3]" />
                  </span>
                  <span>Compliant &amp; Documented</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                    <Check size={10} className="stroke-[3]" />
                  </span>
                  <span>Global Trade Corridors</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================
          2. INTRO SPLIT — About Linkay Commodities
      ============================================================ */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2 mb-3">
              <span>—</span> ABOUT LINKAY COMMODITIES
            </span>
            <h2 className="font-poppins text-white text-[32px] sm:text-[42px] font-bold leading-tight mb-5">
              Institutional Commodity Trading Across Global Trade Routes
            </h2>

            <p className="font-red-hat text-[#9aacc6] text-[16px] sm:text-[18px] leading-relaxed mb-5">
              Linkay Commodities is your reliable counterpart in navigating the fast-evolving world of
              bulk commodities. Whether you are sourcing energy, raw minerals, or agricultural goods,
              our trade desk connects qualified buyers with vetted producers worldwide.
            </p>
            <p className="font-red-hat text-[#9aacc6] text-[16px] sm:text-[18px] leading-relaxed">
              From source origination and quality verification to letters of credit, escrow, and
              charter delivery — we ensure smooth, risk-managed transactions every step of the way.
            </p>

            {/* Quick highlight chips */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {['Origination', 'Bilateral Trading', 'KYC & Trade Compliance', 'Port Logistics', 'Escrow Settlement'].map(
                (chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#080d1a] border border-[#1f293d] text-[12.5px] font-mono text-[#8c1627]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9F1D2C]" />
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Logo panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-2xl overflow-hidden flex items-center justify-center group hover:border-[#8c1627]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#8c1627]/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#9F1D2C]/15 blur-3xl pointer-events-none" />

              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px]">
                <Image
                  src="/images/commodities-logo.png"
                  alt="Linkay Commodities Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>

              <div className="absolute bottom-4 left-6 right-6 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9aacc6]">
                  Verified Physical Trading Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. WHAT WE TRADE — Four Core Commodity Classes
      ============================================================ */}
      <section
        id="trade"
        className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#050814] border-t border-b border-[#1f293d]"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
              <span>—</span> COMMODITY SECTORS
            </span>
            <h2 className="font-poppins text-white text-[32px] sm:text-[44px] font-bold leading-tight mb-4">
              Across Four Core Commodity Classes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commodityClasses.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#080d1a] p-6 rounded-2xl border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[#8c1627]/5 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 flex items-center justify-center text-[#8c1627] group-hover:scale-110 transition-transform">
                        <IconComp size={20} />
                      </div>
                      <span className="text-[11px] font-mono text-[#8c1627] bg-[#030712] px-2.5 py-0.5 rounded-full border border-[#1f293d]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[19px] font-bold mb-2 group-hover:text-[#8c1627] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-[#9aacc6] text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#1f293d] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#9aacc6] uppercase tracking-wider">
                      Class 0{idx + 1}
                    </span>
                    <span className="text-xs text-[#8c1627] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      Trade Desk →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WHY LINKAY COMMODITIES
      ============================================================ */}
      <section className="w-full bg-[#030712] py-24 px-6 sm:px-12 lg:px-16 text-white relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2 mb-3">
                <span>—</span> INSTITUTIONAL STANDARDS
              </span>
              <h2 className="font-poppins text-white text-[32px] sm:text-[44px] font-bold leading-tight max-w-[700px]">
                Built on Trust, Verified at Every Step
              </h2>
            </div>
            <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base max-w-[420px]">
              We minimize execution and counterparty risk through institutional verification and
              watertight documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#080d1a] hover:bg-[#0d1627] p-6 rounded-2xl border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#8c1627]/5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 flex items-center justify-center text-[#8c1627] group-hover:scale-110 transition-transform">
                        <IconComp size={19} />
                      </div>
                      <span className="text-[11px] font-mono text-[#9aacc6] bg-[#030712] px-2.5 py-0.5 rounded-full border border-[#1f293d]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[18px] font-bold mb-2 group-hover:text-[#8c1627] transition-colors">
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
          5. HOW IT WORKS — Trade Flow
      ============================================================ */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto border-t border-[#1f293d]">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> TRADE EXECUTION FLOW
          </span>
          <h2 className="font-poppins text-white text-[32px] sm:text-[44px] font-bold leading-tight mb-4">
            From Inquiry to Physical Settlement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="group bg-[#080d1a] p-6 rounded-2xl border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#8c1627]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 flex items-center justify-center text-[#8c1627] group-hover:scale-110 transition-transform">
                      <IconComp size={19} />
                    </div>
                    <span className="font-poppins text-[24px] font-extrabold leading-none text-[#8c1627]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-poppins text-white text-[18px] font-bold mb-2 group-hover:text-[#8c1627] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-red-hat text-[#9aacc6] text-[14px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1f293d]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8c1627]">
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#8c1627]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#9F1D2C]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase block mb-3">
              — LINKAY COMMODITIES TRADING DESK
            </span>
            <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Trade Bulk Commodities with Total Confidence
            </h3>
            <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base mb-8 leading-relaxed">
              Connect with vetted counterparties across energy, metals, raw materials, and soft
              commodities through our compliant global trading framework.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://linkaycommodities.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
              >
                <span>Launch Linkay Commodities Desk</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="bg-[#030712] hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#8c1627]/50 font-poppins text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                Inquire with Capital Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
