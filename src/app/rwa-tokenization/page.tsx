'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Coins,
  Globe,
  Sparkles,
  Building2,
  Landmark,
  Layers,
  Palette,
  Film,
  Database,
  Shield,
  Scale,
  LineChart,
  PieChart,
  Zap,
  KeyRound,
  Eye,
  Gauge,
  ArrowUpRight,
  BrainCircuit,
  GitBranch,
  CheckCheck,
  ArrowRightLeft,
  Settings2,
  Search,
  CheckCircle2,
  Activity,
  Check,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function RwaTokenizationPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const assetClasses = [
    {
      title: 'Intellectual Property',
      desc: 'Patents, trademarks, copyrights, licensing and royalties.',
      icon: LightbulbIcon,
      badge: 'IP & Patents',
    },
    {
      title: 'Real Estate',
      desc: 'Properties, land, developments and hospitality assets.',
      icon: Building2,
      badge: 'Property & Land',
    },
    {
      title: 'Financial Assets',
      desc: 'Eligible financial instruments and structured assets.',
      icon: Landmark,
      badge: 'Securities & Credit',
    },
    {
      title: 'Infrastructure',
      desc: 'Projects, facilities, equipment and infrastructure assets.',
      icon: Layers,
      badge: 'Energy & Transport',
    },
    {
      title: 'Commodities',
      desc: 'Selected commodities and commodity-linked assets.',
      icon: Sparkles,
      badge: 'Metals & Energy',
    },
    {
      title: 'Collectibles',
      desc: 'Art, memorabilia and other verified collectible assets.',
      icon: Palette,
      badge: 'Fine Art & Rare',
    },
    {
      title: 'Media & Entertainment',
      desc: 'Content rights, licensing interests and royalties.',
      icon: Film,
      badge: 'Streaming & Media',
    },
    {
      title: 'Data & Digital Assets',
      desc: 'Content rights, licensing interests and royalties.',
      icon: Database,
      badge: 'AI & Data Provenance',
    },
  ];

  const pathways = [
    { title: 'Asset Discovery', icon: Search, tag: '01' },
    { title: 'Verification', icon: ShieldCheck, tag: '02' },
    { title: 'Valuation', icon: TrendingUp, tag: '03' },
    { title: 'Digitalization', icon: Cpu, tag: '04' },
    { title: 'Tokenization', icon: Coins, tag: '05' },
    { title: 'Compliance', icon: CheckCheck, tag: '06' },
    { title: 'Market Access', icon: Globe, tag: '07' },
    { title: 'Monetization', icon: ArrowUpRight, tag: '08' },
  ];

  const techStack = [
    {
      id: 1,
      title: 'Smart Assets',
      desc: 'Centralize asset identity, documentation, ownership, provenance and supporting data.',
      icon: Shield,
      layer: 'Foundation',
    },
    {
      id: 2,
      title: 'Valuation',
      desc: 'Bring together valuation information, market data and professional assessments.',
      icon: Scale,
      layer: 'Intelligence',
    },
    {
      id: 3,
      title: 'Monetization',
      desc: 'Create structured pathways for capital formation, transfers and potential liquidity.',
      icon: LineChart,
      layer: 'Liquidity',
    },
    {
      id: 4,
      title: 'Compliance',
      desc: 'Integrate identity, KYC, AML, eligibility and jurisdiction-specific requirements.',
      icon: CheckCheck,
      layer: 'Regulation',
    },
    {
      id: 5,
      title: 'Tokenomics',
      desc: 'Create intelligent digital representations of physical assets for analysis, monitoring and lifecycle management.',
      icon: PieChart,
      layer: 'Economics',
    },
    {
      id: 6,
      title: 'Mint & Issue',
      desc: 'Transform qualifying asset structures into digital representations through appropriate issuance infrastructure.',
      icon: Zap,
      layer: 'Issuance',
    },
    {
      id: 7,
      title: 'Market Access',
      desc: 'Connect eligible assets with appropriate primary-market, marketplace and secondary-market infrastructure.',
      icon: Globe,
      layer: 'Distribution',
    },
    {
      id: 8,
      title: 'AI Digital Twins',
      desc: 'Create intelligent digital representations of physical assets for analysis, monitoring and lifecycle management.',
      icon: BrainCircuit,
      layer: 'AI & Data',
    },
  ];

  const benefits = [
    {
      title: 'Easy Access',
      desc: 'Create structured digital pathways for qualifying assets.',
      icon: KeyRound,
      stat: 'Global Reach',
    },
    {
      title: 'Partial Ownership',
      desc: 'Create structured digital pathways for qualifying assets.',
      icon: PieChart,
      stat: 'Fractional',
    },
    {
      title: 'Transparency',
      desc: 'Connect asset information, documentation and ownership records.',
      icon: Eye,
      stat: '100% Auditable',
    },
    {
      title: 'Efficiency',
      desc: 'Digitize fragmented asset and transaction workflows.',
      icon: Gauge,
      stat: 'T+0 Settlement',
    },
    {
      title: 'Capital Formation',
      desc: 'Create additional infrastructure for connecting assets with appropriate capital.',
      icon: ArrowUpRight,
      stat: 'New Capital',
    },
    {
      title: 'Asset Intelligence',
      desc: 'Combine AI, data and digital twins to better understand the underlying asset.',
      icon: BrainCircuit,
      stat: 'Smart Data',
    },
  ];

  const steps = [
    { num: 1, title: 'Identify', desc: 'Discover and register the asset.', icon: Search },
    {
      num: 2,
      title: 'Verify',
      desc: 'Establish ownership, provenance and documentation.',
      icon: ShieldCheck,
    },
    {
      num: 3,
      title: 'Value',
      desc: 'Assess the asset using valuation and market intelligence.',
      icon: TrendingUp,
    },
    {
      num: 4,
      title: 'Structure',
      desc: 'Define the appropriate legal and economic framework.',
      icon: GitBranch,
    },
    { num: 5, title: 'Tokenize', desc: 'Create the digital representation.', icon: Coins },
    {
      num: 6,
      title: 'Comply',
      desc: 'Apply applicable identity and regulatory controls.',
      icon: CheckCheck,
    },
    {
      num: 7,
      title: 'Connect',
      desc: 'Link eligible assets with appropriate market infrastructure.',
      icon: ArrowRightLeft,
    },
    {
      num: 8,
      title: 'Manage',
      desc: 'Monitor ownership, data, valuation and lifecycle events.',
      icon: Settings2,
    },
  ];

  const ecosystemParticipants = [
    {
      title: 'Asset Owners',
      desc: 'Institutional & private owners unlocking capital liquidity.',
      tag: 'Originators',
    },
    {
      title: 'Valuation Professionals',
      desc: 'Accredited appraisers & market intelligence analysts.',
      tag: 'Auditors',
    },
    {
      title: 'Technology Providers',
      desc: 'Blockchain infrastructure, smart contracts & protocols.',
      tag: 'Infrastructure',
    },
    {
      title: 'Legal & Compliance Specialists',
      desc: 'Securities lawyers, regulatory counsels & KYC/AML providers.',
      tag: 'Governance',
    },
    {
      title: 'Financial & Market Participants',
      desc: 'Family offices, accredited investors & asset managers.',
      tag: 'Capital',
    },
    {
      title: 'Marketplaces & Liquidity Providers',
      desc: 'Secondary exchanges, AMMs & order-book trading venues.',
      tag: 'Liquidity',
    },
  ];

  const formulaItems = [
    'Asset Data',
    'AI',
    'Digital Twins',
    'Valuation',
    'Tokenization',
    'Compliance',
    'Market Infrastructure',
  ];
  const reduceMotion = useReducedMotion();

  return (
    <main className="w-full bg-page-gradient text-[#004a80] font-sans antialiased overflow-x-hidden selection:bg-[#894541] selection:text-white">
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
              src="/images/LV3.png"
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
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                <span>—</span> LINKAY VENTURES · RWA PROTOCOL
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 font-poppins text-[32px] sm:text-[46px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white">
              Multi-RWA Tokenization &amp;{' '}
              <span className="text-[#894541] ">
                Monetization Platform
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mx-auto mb-10 max-w-[620px] font-red-hat text-[16px] sm:text-[19px] md:text-[22px] lg:max-w-[780px] font-normal leading-relaxed text-[#004a80]">
              Transforming real-world assets into structured digital opportunities.
            </p>

            {/* Buttons (Capsule Pills) */}
            <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#894541] hover:bg-[#894541]/90 text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#894541]/30 transition-all hover:-translate-y-0.5"
              >
                <span>Discuss an Asset</span>
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
              >
                <span>Explore How It Works</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Features strip */}
            <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d] pt-8">
              {/* Trust Chips Line */}
              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Institutional Grade Protocol</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Regulatory-Compliant Framework</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Real-Time On-Chain Settlement</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. FEATURES - Finance with Expert Leaders */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2 mb-3">
              <span>—</span> FEATURES
            </span>
            <h2 className="font-poppins text-white text-[32px] sm:text-[42px] font-bold leading-tight mb-5">
              Finance with expert leaders
            </h2>
            <p className="font-red-hat text-[#004a80] text-[16px] sm:text-[18px] leading-relaxed mb-8 font-normal">
              Many valuable assets remain difficult to access, structure, finance and transfer. Our
              RWA infrastructure is designed to create structured pathways for qualifying assets
              through
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {pathways.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-[#004a80] hover:bg-[#003860] border-2 border-[#003860] hover:border-white/30 rounded-2xl p-4 text-center transition-all duration-300 shadow-xl text-white hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-white/15 border border-white/25 text-white group-hover:scale-110 flex items-center justify-center transition-transform">
                      <IconComponent size={18} />
                    </div>

                    <h4 className="font-poppins text-white text-[13.5px] font-semibold leading-tight group-hover:text-[#ffccd3] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/dwojhzdwojhzdwoj.jpeg"
                alt="Finance with Expert Leaders"
                fill
                priority
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTIPLE ASSET CLASSES */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-transparent border-t border-b border-[#C5CDD7]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center justify-center gap-2 mb-3">
              <span>—</span> MULTIPLE ASSET CLASSES
            </span>
            <h2 className="font-poppins text-[#004a80] text-[32px] sm:text-[44px] font-bold leading-tight mb-4">
              One Platform. <span className="text-[#894541]">Diverse Real-World Assets.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetClasses.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-[#004a80] p-6 sm:p-7 rounded-2xl border-2 border-[#003860] hover:border-white/30 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-white"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <IconComp size={22} />
                      </div>
                      <span
                        className="text-[11px] font-mono font-bold text-[#01497f] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7]"
                        style={{ color: '#01497f' }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[19px] font-bold mb-2 group-hover:text-[#ffccd3] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-red-hat text-[#cad8e9] text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE RWA TECHNOLOGY STACK */}
      <section className="w-full bg-transparent py-24 px-6 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#C5CDD7]">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2 mb-3">
                <span>—</span> THE RWA TECHNOLOGY STACK
              </span>
              <h2 className="font-poppins text-[#004a80] text-[32px] sm:text-[44px] font-bold leading-tight max-w-[700px]">
                From Asset Intelligence to{' '}
                <span className="text-[#894541]">Market Infrastructure</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="group bg-[#004a80] p-6 rounded-2xl border-2 border-[#003860] hover:border-white/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl text-white"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <IconComp size={19} />
                      </div>
                      <span
                        className="text-[11px] font-mono text-[#01497f] font-bold bg-[#DDE2E8] px-2.5 py-0.5 rounded-full border border-[#C5CDD7]"
                        style={{ color: '#01497f' }}
                      >
                        {item.layer}
                      </span>
                    </div>

                    <h3 className="font-poppins text-white text-[19px] font-bold mb-2 group-hover:text-[#ffccd3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-red-hat text-[#cad8e9] text-[14px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY RWA TOKENIZATION? */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-[1340px] mx-auto">
        {/* Section Header (Centered on Top for Perfect Balance) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center justify-center gap-2">
              <span>—</span> WHY RWA TOKENIZATION?
            </span>
          </div>

          <h2 className="font-poppins text-[#004a80] text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight mb-4 tracking-tight">
            Greater Possibilities for{' '}
            <span className="text-[#894541] font-bold">Digital Opportunity</span>
          </h2>

          <p className="font-red-hat text-[#004a80] text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Structuring real-world assets into institutional-grade, liquid digital instruments
            through a secure, auditable and transparent protocol stack.
          </p>
        </div>

        {/* 2-Column Balanced Layout: 6 Feature Cards (Left) & Ecosystem Blueprint Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: 6 Feature Cards (2 columns x 3 rows) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#004a80] border-2 border-[#003860] hover:border-white/30 shadow-xl transition-all duration-300 group hover:-translate-y-0.5 text-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 text-white group-hover:scale-110 transition-transform flex items-center justify-center">
                        <IconComp size={17} />
                      </div>
                      <span
                        className="text-[11px] font-mono font-bold text-[#01497f] bg-[#DDE2E8] border border-[#C5CDD7] px-2.5 py-0.5 rounded-full"
                        style={{ color: '#01497f' }}
                      >
                        {b.stat}
                      </span>
                    </div>
                    <h3 className="font-poppins text-white text-[16px] font-bold mb-1.5 group-hover:text-[#ffccd3] transition-colors">
                      {b.title}
                    </h3>
                  </div>
                  <p className="font-red-hat text-[#cad8e9] text-[13px] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Ecosystem Architecture Showcase Card */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            {/* Ambient Lighting Orbs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#894541]/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-[#004a80]/20 blur-3xl pointer-events-none" />

            {/* Showcase Card Mockup */}
            <div className="relative w-full h-full rounded-[28px] sm:rounded-[32px] border-2 border-[#C5CDD7] bg-white p-3.5 sm:p-5 shadow-2xl shadow-[#004a80]/15 transition-all duration-500 hover:border-[#894541]/40 hover:shadow-2xl group flex flex-col justify-between">
              {/* Window Header */}

              {/* Framed Graphic */}
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-2xl border border-[#C5CDD7]/30 bg-white p-1">
                <Image
                  src="/images/uilivuerqgliuer-1024x1024.png"
                  alt="Why RWA Tokenization? Ecosystem Blueprint"
                  width={1024}
                  height={1024}
                  priority
                  className="w-full h-auto max-h-[480px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section
        id="how-it-works"
        className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-transparent border-t border-b border-[#C5CDD7]"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center justify-center gap-2 mb-3">
              <span>—</span> HOW IT WORKS
            </span>
            <h2 className="font-poppins text-[#004a80] text-[32px] sm:text-[44px] font-bold leading-tight mb-4">
              From Physical Asset to <span className="text-[#894541]">Digital Opportunity</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((st) => {
              const IconComp = st.icon;
              const isSelected = activeStep === st.num;
              return (
                <div
                  key={st.num}
                  onClick={() => setActiveStep(activeStep === st.num ? null : st.num)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl text-white ${
                    isSelected
                      ? 'border-[#ffccd3] bg-[#004a80] shadow-2xl ring-2 ring-[#894541]'
                      : 'bg-[#004a80] border-[#003860] hover:border-white/40'
                  }`}
                  style={{ backgroundColor: '#004a80', color: '#ffffff' }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-poppins text-[28px] font-extrabold leading-none ${
                          isSelected ? 'text-[#ffccd3]' : 'text-white/60 group-hover:text-[#ffccd3]'
                        }`}
                      >
                        {st.num.toString().padStart(2, '0')}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#894541] text-white shadow-md shadow-[#894541]/40'
                            : 'bg-white/15 border border-white/25 text-white group-hover:bg-[#894541]'
                        }`}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    <h3
                      className="font-poppins text-white text-[19px] font-bold mb-2 group-hover:text-[#ffccd3] transition-colors"
                      style={{ color: '#ffffff' }}
                    >
                      {st.title}
                    </h3>
                  </div>

                  <p
                    className="font-red-hat text-[#cad8e9] text-[13.5px] leading-relaxed mt-2 pt-3 border-t border-white/15 font-normal"
                    style={{ color: '#cad8e9' }}
                  >
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BEYOND TOKENIZATION & THE LINKAY RWA VISION */}
      <section className="w-full bg-transparent py-24 px-6 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/42miq342miq342m.jpeg"
                alt="Beyond Tokenization"
                fill
                priority
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-9">
            <div>
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2 mb-3">
                <span>—</span> BEYOND TOKENIZATION
              </span>
              <h2 className="font-poppins text-[#004a80] text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
                Building the Infrastructure Around the Asset
              </h2>

              <div className="flex flex-wrap gap-2.5 my-5">
                {formulaItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border-2 border-[#004a80] text-xs font-mono font-bold text-[#01497f] shadow-sm"
                    style={{ color: '#01497f' }}
                  >
                    <span>{item}</span>
                    {idx < formulaItems.length - 1 && (
                      <span className="text-[#894541] font-extrabold text-sm"></span>
                    )}
                  </span>
                ))}
              </div>

              <p className="font-red-hat text-[#004a80] text-[16px] leading-relaxed">
                Make real-world value more structured, intelligent and digitally connected.
              </p>
            </div>

            <div className="pt-8 border-t border-[#004a80]/20">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2 mb-3">
                <span>—</span> THE LINKAY RWA VISION
              </span>
              <h2 className="font-poppins text-[#004a80] text-[28px] sm:text-[36px] font-bold leading-tight mb-4">
                From Real-World Value to{' '}
                <span className="text-[#894541] font-bold">Digital Market Opportunity</span>
              </h2>
              <p className="font-red-hat text-[#004a80] text-[15.5px] leading-relaxed">
                Linkay Ventures is exploring the convergence of finance, technology, AI, blockchain
                and real-world assets to create new digital infrastructure for the evolving global
                economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AN ECOSYSTEM OF CONNECTED PARTICIPANTS */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> VALUE CHAIN
          </span>
          <h2 className="font-poppins text-white text-[32px] sm:text-[44px] font-bold leading-tight mb-3">
            Connecting the{' '}
            <span className="text-[#894541] drop-shadow-[0_0_20px_rgba(161, 43, 60,0.35)]">
              RWA Value Chain
            </span>
          </h2>
          <p className="font-red-hat text-[#004a80] text-[17px]">
            The platform is designed to bring together
          </p>
        </div>

        <div className="relative mx-auto max-w-[760px]">
          <span
            aria-hidden="true"
            className="absolute bottom-10 left-[19px] top-10 w-px bg-gradient-to-b from-[#894541]/80 via-[#894541] to-transparent sm:left-[21px]"
          />

          <div className="flex flex-col gap-9 pl-14 sm:pl-16">
            {ecosystemParticipants.map((part, idx) => (
              <motion.div
                key={`${part.title}-${idx}`}
                className="relative w-full"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: 'easeOut',
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-14 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#C5CDD7] bg-[#DDE2E8] font-mono text-xs font-bold text-[#01497f] shadow-md sm:-left-16 sm:h-11 sm:w-11"
                  style={{ color: '#01497f' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="group relative overflow-hidden rounded-2xl border-2 border-[#003860] bg-[#004a80] p-5 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 sm:p-6 text-white">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-[#894541] transition-transform duration-300 group-hover:scale-y-100"
                  />

                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <h3 className="font-poppins text-[17px] font-semibold leading-tight text-white group-hover:text-[#ffccd3] transition-colors sm:text-[18px]">
                      {part.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-[13px] leading-relaxed text-[#cad8e9] sm:text-[14px]">
                    {part.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner (Venture HUB styled Card) */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#004a80] text-white border-2 border-[#003860] text-center relative max-w-[960px] mx-auto shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#894541]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-52 h-52 rounded-full bg-[#894541]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#894541]" />
              <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#894541]">
                Start Your Tokenization Journey
              </span>
            </div>
            <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Tokenize Real-World Assets?
            </h3>
            <p className="font-red-hat text-[#cad8e9] text-sm sm:text-base mb-8 leading-relaxed">
              Discuss with our experts to structure, digitize, and issue your assets on a compliant
              institutional platform.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#894541] hover:bg-[#894541]/90 text-white font-poppins text-sm font-bold px-8 py-3.5 rounded-full transition-all shadow-md shadow-[#894541]/25 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Discuss an Asset
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-[#DDE2E8] hover:bg-[#cad2dc] text-[#01497f] border-2 border-[#DDE2E8] font-poppins text-sm font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
                style={{ color: '#01497f' }}
              >
                Explore How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
