'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  ShieldCheck,
  Scale,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lock,
  Unlock,
  FileText,
  Coins,
  AlertCircle,
  Zap,
  Building2,
  Unlink,
  Sparkles,
  Play,
  X,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Cpu,
  Globe2,
  Repeat,
  Eye,
  Sliders,
  Palette,
  Laptop,
  Check,
  FileCode,
  Users,
  Briefcase,
  DollarSign,
  PieChart,
  Home,
  Lightbulb,
} from 'lucide-react';

export default function TokenizationPlatformPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [selectedColor, setSelectedColor] = useState('#9F1D2C');

  // Solutions data
  const solutions = [
    {
      id: 'issuance',
      title: 'Token Issuance',
      tag: 'For Issuer',
      description:
        'Seamlessly tokenize your real-world assets (RWAs) and get ready to launch your tokenized offerings globally on our Singapore-licensed marketplace infrastructure.',
      features: [
        { text: 'Proprietary token issuance technology', icon: Cpu },
        { text: 'Customizable security token offering', icon: Sliders },
        { text: 'Smart contract development & audits', icon: FileCode },
        { text: 'Automated onboarding & investor whitelisting', icon: Users },
      ],
    },
    {
      id: 'primary',
      title: 'Primary Offering',
      tag: 'For Issuer',
      description:
        'Utilize licensed capital marketplace infrastructure and distribution partners to conduct token offerings to qualified international investors.',
      features: [
        { text: 'Institutional platform distribution', icon: Globe2 },
        { text: 'Global syndicate distribution network', icon: Layers },
        { text: 'Investor roadshows and capital syndicate access', icon: TrendingUp },
      ],
    },
    {
      id: 'secondary',
      title: 'Secondary Trading',
      tag: 'For Investor',
      description:
        'Beyond primary offerings, list RWA tokens on licensed secondary venues to enhance continuous liquidity and flexibility for digital asset investors.',
      features: [
        { text: 'Peer-to-Peer Trading Infrastructure', icon: Repeat },
        { text: "Organized Secondary Venue ('IX Exchange')", icon: Building2 },
      ],
    },
    {
      id: 'custody',
      title: 'Custody Solutions',
      tag: 'For Issuer & Investor',
      description:
        'Securely store, safekeep, and manage institutional RWA tokens with qualified, insured custodians.',
      features: [
        { text: 'Safekeep with a licensed digital asset custodian', icon: ShieldCheck },
        { text: 'Regulatory compliant insurance coverage', icon: Shield },
        { text: 'Multi-sig and institutional-grade access controls', icon: Lock },
        { text: 'Comprehensive reporting and regular auditing', icon: FileText },
      ],
    },
    {
      id: 'lifecycle',
      title: 'Life Cycle Management',
      tag: 'For Issuer',
      description:
        'Manage tokenized assets seamlessly throughout their lifespan. Automate corporate actions, yield distributions, reporting, and investor relations.',
      features: [
        { text: 'Asset servicing and corporate actions automation', icon: Sliders },
        { text: 'Track digital asset portfolios in real time', icon: Eye },
        { text: 'Continuous compliance and governance oversight', icon: Scale },
        { text: 'Automated transaction monitoring & reporting', icon: FileText },
      ],
    },
    {
      id: 'cobranded',
      title: 'Co-Branded Platform',
      tag: 'For Issuer',
      description:
        'Launch a co-branded portal for your enterprise on licensed architecture to create and distribute RWA offerings worldwide.',
      features: [
        { text: 'Showcase offerings on a custom domain with custom branding', icon: Globe2 },
        { text: 'Our infrastructure, your brand identity', icon: Palette },
        { text: 'Full license and tech integration to accelerate time-to-market', icon: Zap },
      ],
    },
  ];

  // Platform benefits
  const platformBenefits = [
    {
      title: 'Complete Tokenization Solution',
      desc: 'Comprehensive management of the entire RWA token life cycle, fulfilling the exact regulatory and technical requirements of issuers and allocators.',
      icon: Layers,
    },
    {
      title: 'Institutional Compliance',
      desc: 'Built in alignment with rigorous regulatory regimes for issuing, managing, and trading RWA security tokens across global jurisdictions.',
      icon: ShieldCheck,
    },
    {
      title: 'Diverse Asset Class Support',
      desc: 'Tokenize physical real estate, private credit, infrastructure funds, intellectual property, and institutional commodities.',
      icon: Coins,
    },
    {
      title: 'Instant Liquidity Access',
      desc: 'Secondary exchange integrations, peer-to-peer protocols, and AMM pools designed to unlock liquidity for historically illiquid asset classes.',
      icon: TrendingUp,
    },
    {
      title: 'Custody & Insurance',
      desc: 'Enterprise-grade key management and insured cold-storage vaults provided by top-tier regulated custodians.',
      icon: Lock,
    },
    {
      title: 'Developer SDK & APIs',
      desc: 'Robust REST and GraphQL APIs allowing banks, asset managers, and fintechs to embed tokenization primitives into existing apps.',
      icon: Cpu,
    },
  ];

  // Asset types
  const assetTypes = [
    { name: 'Commercial Real Estate', icon: Building2 },
    { name: 'Private Equity & Funds', icon: Briefcase },
    { name: 'Private Debt & Credit', icon: DollarSign },
    { name: 'Infrastructure & Energy', icon: Zap },
    { name: 'Structured Debt & Bonds', icon: FileText },
    { name: 'Commodities & Metals', icon: Coins },
    { name: 'IP & Patent Royalties', icon: Lightbulb },
    { name: 'Venture Portfolios', icon: PieChart },
  ];

  // Process steps
  const processSteps = [
    {
      step: '01',
      title: 'Asset Structuring & Legal',
      desc: 'Establish the SPV, legal jurisdiction, and securities classification for regulatory compliance.',
    },
    {
      step: '02',
      title: 'Smart Contract Architecture',
      desc: 'Develop audited smart contracts embedding transfer restrictions, KYC whitelisting, and dividend logic.',
    },
    {
      step: '03',
      title: 'Primary Offering & Syndication',
      desc: 'Launch the primary issuance campaign to accredited allocators and institutional syndicates.',
    },
    {
      step: '04',
      title: 'Secondary Market Listing',
      desc: 'Enable secondary trading and liquidity on regulated exchanges and peer-to-peer trading venues.',
    },
    {
      step: '05',
      title: 'Lifecycle & Asset Servicing',
      desc: 'Automate yield distributions, voting rights, tax documentation, and regulatory disclosures.',
    },
  ];

  // Comparison data
  const comparisonData = [
    {
      web2: 'Closed, siloed paper records',
      web2Icon: Lock,
      web3: 'Open, verifiable on-chain registry',
      web3Icon: Unlock,
    },
    {
      web2: 'Paper certificates & manual transfers',
      web2Icon: FileText,
      web3: 'Smart contract security tokens (STOs)',
      web3Icon: Coins,
    },
    {
      web2: 'Multi-year liquidity lockups',
      web2Icon: AlertCircle,
      web3: '24/7 secondary exchange liquidity',
      web3Icon: Zap,
    },
    {
      web2: 'Restricted traditional finance rails',
      web2Icon: Building2,
      web3: 'TradFi compliance meets DeFi composability',
      web3Icon: Layers,
    },
    {
      web2: 'No digital asset or smart wallet link',
      web2Icon: Unlink,
      web3: 'Interoperable across institutional digital assets',
      web3Icon: Sparkles,
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-page-gradient text-[#004a80] font-sans selection:bg-[#9F1D2C] selection:text-white overflow-x-hidden">

      {/* ============================================================
          1. HERO SECTION
      ============================================================ */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 px-6 sm:px-12 max-w-[1240px] mx-auto z-10">
        <div className="text-center max-w-[920px] mx-auto">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
              <span>—</span> INSTITUTIONAL REAL-WORLD ASSET INFRASTRUCTURE
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] sm:text-[54px] md:text-[68px] font-extrabold font-poppins text-white tracking-tight leading-[1.08] mb-6">
            Institutional Tokenization{' '}
            <span className="text-[#A12B3C] drop-shadow-[0_0_20px_rgba(161, 43, 60,0.35)]">
              Platform
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[16px] sm:text-[20px] font-red-hat text-[#9aacc6] leading-relaxed max-w-[760px] mx-auto mb-10 font-normal">
            End-to-end tokenization architecture for real-world assets (RWA) — covering primary
            issuance, secondary trading, qualified custody, and automated lifecycle servicing.
          </p>

          {/* CTA Buttons (Capsule Pills) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 mb-16 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#9F1D2C] hover:bg-[#851823] transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Discuss Your Asset</span>
              <ArrowRight size={17} />
            </Link>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-[#f4f7ff] bg-[#080d1a] hover:bg-[#101a2a] transition-all border border-[#233049] hover:border-[#A12B3C]/50 hover:text-[#A12B3C] shadow-sm hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <div className="w-5 h-5 rounded-full bg-[#9F1D2C] text-white flex items-center justify-center">
                <Play size={10} className="ml-0.5" />
              </div>
              <span className="tracking-wide">WATCH DEMO</span>
            </button>
          </div>
        </div>

        {/* Hero Interactive Interface Preview Card */}
        <div className="relative mx-auto max-w-[1080px] rounded-3xl bg-[#080d1a] p-4 sm:p-7 border border-[#1f293d] shadow-2xl overflow-hidden">
          {/* Top Bar simulating platform */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1f293d] mb-6">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-3 h-3 rounded-full bg-red-500/80 shrink-0" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 shrink-0" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="ml-2 text-[11px] sm:text-[12px] font-mono text-[#9aacc6] truncate max-w-[200px] sm:max-w-none">
                https://portal.linkayventures.com/rwa-marketplace
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Node Verified
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#030712] text-[#A12B3C] border border-[#1f293d]">
                Sandbox
              </span>
            </div>
          </div>

          {/* Main Dashboard Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Stat Card 1 */}
            <div className="md:col-span-4 bg-[#050814] rounded-2xl p-5 border border-[#1f293d]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-semibold uppercase text-[#9aacc6] tracking-wider">
                  Total Tokenized Value
                </span>
                <Coins size={18} className="text-[#A12B3C]" />
              </div>
              <div className="text-[32px] font-bold font-poppins text-white mb-1">$482,500,000</div>
              <div className="text-[12px] text-emerald-400 font-mono flex items-center gap-1">
                <TrendingUp size={14} />
                <span>+24.8% Active Issuance Volume</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="md:col-span-4 bg-[#050814] rounded-2xl p-5 border border-[#1f293d]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-semibold uppercase text-[#9aacc6] tracking-wider">
                  Secondary Market Rails
                </span>
                <Repeat size={18} className="text-[#A12B3C]" />
              </div>
              <div className="text-[32px] font-bold font-poppins text-white mb-1">IX Exchange</div>
              <div className="text-[12px] text-[#9aacc6] font-mono">
                P2P &amp; Order Book Liquidity
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="md:col-span-4 bg-[#050814] rounded-2xl p-5 border border-[#1f293d]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-semibold uppercase text-[#9aacc6] tracking-wider">
                  Custody &amp; Compliance
                </span>
                <ShieldCheck size={18} className="text-[#A12B3C]" />
              </div>
              <div className="text-[32px] font-bold font-poppins text-white mb-1">100% Insured</div>
              <div className="text-[12px] text-[#9aacc6] font-mono">
                Qualified Digital Asset Custodian
              </div>
            </div>

            {/* Asset Row Simulation */}
            <div className="md:col-span-12 bg-[#050814] rounded-2xl p-5 border border-[#1f293d]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-bold font-poppins text-white">
                  Active Security Token Offerings (STOs)
                </span>
                <Link
                  href="/rwa-tokenization"
                  className="text-[12px] font-mono text-[#A12B3C] hover:underline"
                >
                  Explore Asset Architecture &rarr;
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: 'Singapore Prime Real Estate Fund (eVCC)',
                    ticker: 'SPRE-STO',
                    target: '$50M USD',
                    yield: '8.4% Net p.a.',
                    status: 'Open for Subscription',
                  },
                  {
                    name: 'US Treasury Yield Plus Token',
                    ticker: 'UST-PLUS',
                    target: '$100M USD',
                    yield: '5.2% Daily Compound',
                    status: 'Active Trading',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#080d1a] border border-[#1f293d] gap-2"
                  >
                    <div>
                      <span className="font-semibold text-[14px] text-white block">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#A12B3C]">{item.ticker}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="text-[#9aacc6]">Target: {item.target}</span>
                      <span className="text-emerald-400 font-bold">{item.yield}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#030712] text-[#A12B3C] border border-[#1f293d]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. WE WORK WITH GLOBAL BRANDS
      ============================================================ */}
      <section className="py-16 border-y border-[#1f293d] bg-transparent">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-[12px] font-mono uppercase tracking-[2px] text-[#9aacc6] mb-8">
            Integrated With Premier Blockchain Infrastructure &amp; Ecosystems
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 hover:opacity-100 transition-opacity">
            {[
              'Ethereum',
              'BNB Chain',
              'Polygon',
              'XDC Network',
              'Algorand',
              'Hedera',
              'Tezos',
              'Kaia',
              'Plug and Play',
            ].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-[#A12B3C] group-hover:scale-125 transition-transform" />
                <span className="font-bold text-[17px] text-[#9aacc6] group-hover:text-white transition-colors tracking-tight">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. REGULATORY LICENSES BANNER
      ============================================================ */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> MONETARY AUTHORITY OF SINGAPORE (MAS) FRAMEWORK
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-bold font-poppins text-white tracking-tight mb-4">
            Regulated Capital Markets Infrastructure
          </h2>
          <p className="text-[17px] font-red-hat text-[#9aacc6] leading-relaxed">
            Operating under rigorous regulatory standards to safeguard institutional and accredited
            investors throughout primary issuance and secondary liquidity.
          </p>
        </div>

        {/* 3 Licenses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#080d1a] rounded-2xl p-8 border border-[#1f293d] hover:border-[#A12B3C]/50 transition-all duration-300 shadow-lg hover:shadow-[#A12B3C]/5 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#A12B3C]/10 text-[#A12B3C] border border-[#A12B3C]/25 flex items-center justify-center mb-6">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-[19px] font-bold text-white mb-3 leading-snug">
              Capital Markets Services (CMS)
            </h3>
            <p className="text-[14px] font-red-hat text-[#9aacc6] leading-relaxed">
              Authorized to deal in securities and collective investment schemes for institutional
              primary issuance and syndicate distribution.
            </p>
          </div>

          <div className="bg-[#080d1a] rounded-2xl p-8 border border-[#1f293d] hover:border-[#A12B3C]/50 transition-all duration-300 shadow-lg hover:shadow-[#A12B3C]/5 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#A12B3C]/10 text-[#A12B3C] border border-[#A12B3C]/25 flex items-center justify-center mb-6">
              <Building2 size={26} />
            </div>
            <h3 className="text-[19px] font-bold text-white mb-3 leading-snug">
              Recognized Market Operator (RMO)
            </h3>
            <p className="text-[14px] font-red-hat text-[#9aacc6] leading-relaxed">
              Licensed to operate an organized secondary marketplace for securities and digital asset
              security tokens.
            </p>
          </div>

          <div className="bg-[#080d1a] rounded-2xl p-8 border border-[#1f293d] hover:border-[#A12B3C]/50 transition-all duration-300 shadow-lg hover:shadow-[#A12B3C]/5 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#A12B3C]/10 text-[#A12B3C] border border-[#A12B3C]/25 flex items-center justify-center mb-6">
              <Scale size={26} />
            </div>
            <h3 className="text-[19px] font-bold text-white mb-3 leading-snug">
              Exempt Financial Advisor
            </h3>
            <p className="text-[14px] font-red-hat text-[#9aacc6] leading-relaxed">
              Empowered to provide structured financial advice on units in collective investment
              schemes and corporate fund vehicles.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#f4f7ff] bg-[#080d1a] border border-[#233049] hover:border-[#A12B3C]/50 hover:text-[#A12B3C] transition-all hover:-translate-y-0.5"
          >
            <span>Explore All Linkay Services</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ============================================================
          4. ONE-STOP SHOP SOLUTION FOR ASSET TOKENIZATION
      ============================================================ */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto border-t border-[#1f293d]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> END-TO-END INFRASTRUCTURE
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-bold font-poppins text-white tracking-tight mb-4">
            One-Stop Architecture for Asset Tokenization
          </h2>
          <p className="text-[17px] font-red-hat text-[#9aacc6]">
            Comprehensive lifecycle solutions from legal structuring and smart contract minting to
            global distribution and secondary exchange liquidity.
          </p>
        </div>

        {/* Tab Buttons (Capsule Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-full bg-[#050814] border border-[#1f293d] max-w-[1020px] mx-auto mb-12">
          {solutions.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
                activeTab === idx
                  ? 'bg-[#9F1D2C] text-white shadow-lg shadow-[#9F1D2C]/30'
                  : 'text-[#9aacc6] hover:text-[#A12B3C] hover:bg-[#080d1a]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Active Tab Card Content */}
        <div className="max-w-[1020px] mx-auto bg-[#080d1a] rounded-3xl p-8 sm:p-12 border border-[#1f293d] shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-[#1f293d]">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#030712] text-[#A12B3C] border border-[#1f293d] mb-3">
                {solutions[activeTab].tag}
              </span>
              <h3 className="text-[28px] sm:text-[34px] font-bold font-poppins text-white tracking-tight mb-3">
                {solutions[activeTab].title}
              </h3>
              <p className="text-[16px] sm:text-[18px] font-red-hat text-[#9aacc6] leading-relaxed max-w-[650px]">
                {solutions[activeTab].description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#9F1D2C] hover:bg-[#851823] transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
              >
                <Play size={15} />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Features Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutions[activeTab].features.map((feat, fIdx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={fIdx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#050814] border border-[#1f293d]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#080d1a] text-[#A12B3C] border border-[#1f293d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <span className="text-[15px] font-semibold text-white leading-snug">
                      {feat.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. PLATFORM BENEFITS
      ============================================================ */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> INSTITUTIONAL ADVANTAGES
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-bold font-poppins text-white tracking-tight mb-4">
            Platform Benefits
          </h2>
          <p className="text-[17px] font-red-hat text-[#9aacc6]">
            Unlocking institutional liquidity, regulatory confidence, and seamless global distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformBenefits.map((b, idx) => {
            const IconComponent = b.icon;
            return (
              <div
                key={idx}
                className="bg-[#080d1a] rounded-2xl p-8 border border-[#1f293d] hover:border-[#A12B3C]/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#A12B3C]/5"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#A12B3C]/10 text-[#A12B3C] border border-[#A12B3C]/25 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-3 leading-snug font-poppins group-hover:text-[#A12B3C] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-[14px] font-red-hat text-[#9aacc6] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1f293d] flex items-center text-[12px] font-mono text-[#A12B3C]">
                  <span>Institutional Grade</span>
                  <Check size={14} className="ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          6. INSTITUTIONAL ENDORSEMENT QUOTE
      ============================================================ */}
      <section className="py-16 px-6 sm:px-12 max-w-[1080px] mx-auto">
        <div className="bg-[#080d1a] rounded-3xl p-8 sm:p-14 border border-[#1f293d] shadow-2xl relative overflow-hidden">
          <div className="text-[#A12B3C]/20 text-[72px] font-serif leading-none mb-2 select-none">
            “
          </div>
          <blockquote className="text-[20px] sm:text-[24px] font-medium font-red-hat text-white leading-relaxed mb-8">
            What sets this tokenization architecture apart is its status as a licensed platform,
            allowing for regulatorily compliant issuance and trading of digital asset securities or
            security tokens.
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-[#1f293d]">
            <div className="w-11 h-11 rounded-xl bg-[#A12B3C]/10 border border-[#A12B3C]/25 text-[#A12B3C] flex items-center justify-center font-bold text-[14px] font-mono">
              KPMG
            </div>
            <div>
              <div className="text-[15px] font-bold text-white">
                The Asset Tokenization C-Suite Playbook
              </div>
              <div className="text-[13px] text-[#9aacc6]">
                by KPMG Singapore &amp; Singapore FinTech Association (SFA)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. ASSETS YOU CAN TOKENIZE
      ============================================================ */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> FLEXIBLE FRAMEWORKS
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-bold font-poppins text-white tracking-tight mb-4">
            Assets You Can Tokenize
          </h2>
          <p className="text-[17px] font-red-hat text-[#9aacc6]">
            Transform traditionally illiquid assets into liquid, programmable digital tokens.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {assetTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#080d1a] rounded-2xl p-6 border border-[#1f293d] hover:border-[#A12B3C]/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[#A12B3C]/5"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#A12B3C]/10 text-[#A12B3C] border border-[#A12B3C]/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-4 font-poppins group-hover:text-[#A12B3C] transition-colors">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[12px] font-mono text-[#A12B3C] hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          8. VALUE PROPOSITIONS: WEB 2.0 VS WEB 3.0 COMPARISON
      ============================================================ */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto border-t border-[#1f293d]">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> VALUE PROPOSITIONS
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-bold font-poppins text-white tracking-tight mb-4">
            Web 2.0 vs Web 3.0 Capital Architecture
          </h2>
          <p className="text-[17px] font-red-hat text-[#9aacc6]">
            Comparing legacy paper-bound financial mechanisms with regulated blockchain real-world asset
            tokenization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1080px] mx-auto">
          {/* Legacy Web 2.0 Card */}
          <div className="rounded-3xl p-7 sm:p-9 bg-[#050814] border border-[#1f293d] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#1f293d] mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9aacc6] block mb-1">
                    Legacy Architecture
                  </span>
                  <h3 className="text-[22px] font-bold text-[#9aacc6] tracking-tight font-poppins">
                    WEB 2.0 INVESTMENTS
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#080d1a] border border-[#1f293d] text-[#9aacc6] flex items-center justify-center">
                  <Lock size={18} />
                </div>
              </div>

              <div className="space-y-4">
                {comparisonData.map((row, idx) => {
                  const Icon = row.web2Icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl bg-[#080d1a] border border-[#1f293d]"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-[#030712] text-[#9aacc6] flex items-center justify-center flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <span className="text-[14px] font-medium text-[#9aacc6] font-red-hat">
                          {row.web2}
                        </span>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1f293d] flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 pt-4 text-[12px] font-mono text-[#9aacc6] text-center border-t border-[#1f293d]">
              Restricted market access &bull; Manual settlements &bull; Opaque valuations
            </div>
          </div>

          {/* Next-Gen Web 3.0 Card */}
          <div className="rounded-3xl p-7 sm:p-9 bg-[#080d1a] border-2 border-[#A12B3C] shadow-[0_12px_40px_rgba(161, 43, 60,0.15)] relative flex flex-col justify-between">
            {/* Recommended Tag */}
            <div className="absolute -top-3.5 right-8 bg-[#A12B3C] text-[#030712] text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              Next-Gen Standard
            </div>

            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#1f293d] mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A12B3C] block mb-1">
                    Licensed Tokenization Standard
                  </span>
                  <h3 className="text-[22px] font-bold text-white tracking-tight font-poppins">
                    WEB 3.0 INVESTMENTS
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#A12B3C]/10 text-[#A12B3C] border border-[#A12B3C]/25 flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="space-y-4">
                {comparisonData.map((row, idx) => {
                  const Icon = row.web3Icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl bg-[#050814] border border-[#A12B3C]/30 shadow-sm hover:border-[#A12B3C] transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-[#080d1a] text-[#A12B3C] border border-[#1f293d] flex items-center justify-center flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <span className="text-[14px] font-bold text-white font-red-hat">
                          {row.web3}
                        </span>
                      </div>
                      <CheckCircle2 size={18} className="text-[#A12B3C] flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 pt-4 text-[12px] font-mono text-[#A12B3C] font-semibold text-center border-t border-[#1f293d]">
              Instant liquidity &bull; Automated compliance &bull; Verifiable on-chain provenance
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. ASSET TOKENIZATION PROCESS
      ============================================================ */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto border-t border-[#1f293d]">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
            <span>—</span> ROADMAP TO LAUNCH
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-bold font-poppins text-white tracking-tight mb-4">
            Asset Tokenization Process
          </h2>
          <p className="text-[17px] font-red-hat text-[#9aacc6]">
            A structured 5-step pathway guiding asset owners from initial structuring to global trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14">
          {processSteps.map((st, idx) => (
            <div
              key={idx}
              className="bg-[#080d1a] rounded-2xl p-6 border border-[#1f293d] hover:border-[#A12B3C]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-[#A12B3C]/5"
            >
              <div>
                <span className="text-[36px] font-extrabold text-[#A12B3C] block mb-2 font-mono">
                  {st.step}
                </span>
                <h3 className="text-[16px] font-bold font-poppins text-white mb-3 leading-snug">
                  {st.title}
                </h3>
                <p className="text-[13px] font-red-hat text-[#9aacc6] leading-relaxed">
                  {st.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1f293d] flex items-center text-[11px] font-mono uppercase text-[#9aacc6] group-hover:text-[#A12B3C] transition-colors">
                <span>Phase {st.step}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-semibold text-white bg-[#9F1D2C] hover:bg-[#851823] transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
          >
            <span>Start Tokenization Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ============================================================
          10. CO-BRANDED PLATFORM SIMULATION
      ============================================================ */}
      <section className="py-24 px-6 sm:px-12 max-w-[1240px] mx-auto border-t border-[#1f293d]">
        <div className="bg-[#080d1a] rounded-3xl p-8 sm:p-14 border border-[#1f293d] shadow-2xl">
          <div className="text-center max-w-[800px] mx-auto mb-14">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2 mb-3">
              <span>—</span> WHITE-LABEL &amp; CO-BRANDED PORTAL
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-bold font-poppins text-white tracking-tight mb-4">
              Your Brand. Regulated Infrastructure.
            </h2>
            <p className="text-[17px] font-red-hat text-[#9aacc6]">
              Launch a dedicated portal on your custom domain, featuring your brand identity, while
              leveraging institutional compliance, KYC verification engines, and qualified custodian
              integrations.
            </p>
          </div>

          <div className="bg-[#050814] rounded-2xl border border-[#1f293d] p-6 sm:p-8 max-w-[900px] mx-auto">
            <div className="flex items-center justify-between pb-5 border-b border-[#1f293d] mb-6">
              <div className="flex items-center gap-3">
                <Laptop size={20} className="text-[#A12B3C]" />
                <span className="text-[14px] font-bold text-white font-poppins">
                  Client Portal Customization
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-mono text-[#9aacc6]">Theme Accent:</span>
                <div className="flex items-center gap-1.5">
                  {['#9F1D2C', '#A12B3C', '#2563EB', '#059669', '#9333EA'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-5 h-5 rounded-full transition-transform ${
                        selectedColor === color ? 'scale-125 ring-2 ring-white' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#9aacc6] block mb-1">
                  Custom Domain
                </label>
                <div className="px-4 py-2.5 rounded-lg bg-[#080d1a] border border-[#1f293d] text-[13px] font-mono text-[#A12B3C]">
                  invest.yourcompany.com
                </div>
              </div>
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#9aacc6] block mb-1">
                  Architecture Status
                </label>
                <div className="px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[13px] font-mono font-semibold text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Licensed Ecosystem Connected</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-dashed border-[#1f293d] rounded-2xl p-8 text-center bg-[#080d1a]/50 mb-6 hover:border-[#A12B3C] transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-[#A12B3C]/10 border border-[#A12B3C]/25 flex items-center justify-center mx-auto mb-3 text-[#A12B3C]">
                <Palette size={22} />
              </div>
              <span className="text-[14px] font-bold text-white block font-poppins">
                Custom Brand Architecture
              </span>
              <span className="text-[12px] font-mono text-[#9aacc6]">
                Custom domain, custom logo, full license and tech integration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          11. DEFI & LIQUIDITY INTEGRATIONS
      ============================================================ */}
      <section className="py-20 px-6 sm:px-12 max-w-[1080px] mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-[#080d1a] text-white border border-[#1f293d] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-[620px]">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#030712] text-[#A12B3C] border border-[#1f293d] mb-4">
              DeFi &amp; AMM Liquidity Rails
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold font-poppins tracking-tight mb-3">
              Institutional DeFi Trading for RWAs
            </h2>
            <p className="text-[15px] font-red-hat text-[#9aacc6] leading-relaxed">
              Connect private assets and real-world equity directly to licensed automated market
              makers (AMMs) and liquidity protocols.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#9F1D2C] hover:bg-[#851823] transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
            >
              <span>Inquire About Liquidity Rails</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          12. EDUCATIONAL CALLOUT
      ============================================================ */}
      <section className="pb-24 px-6 sm:px-12 max-w-[1080px] mx-auto">
        <div className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] text-[#9aacc6] text-[14px] sm:text-[15px] leading-relaxed font-red-hat">
          <strong className="text-white font-poppins">What are Real-World Asset (RWA) Tokens? </strong>
          Real-world asset (RWA) tokens are digital representations of rights in real assets such as
          commercial real estate, private equity, debt facilities, or commodities. Powered by smart
          contracts and institutional oversight, they revolutionize investments by enhancing
          transparency, security, fractional ownership, and automated settlement.
        </div>
      </section>

      {/* ============================================================
          13. DEMO VIDEO MODAL
      ============================================================ */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-[800px] bg-[#080d1a] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#1f293d]">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#030712] hover:bg-[#9F1D2C] hover:text-white flex items-center justify-center text-[#9aacc6] transition-colors border border-[#1f293d]"
            >
              <X size={18} />
            </button>

            <div className="mb-4">
              <span className="text-[12px] font-mono font-bold text-[#A12B3C] uppercase tracking-wider">
                Platform Walkthrough
              </span>
              <h3 className="text-[22px] font-bold font-poppins text-white">
                RWA Tokenization Architecture Demo
              </h3>
            </div>

            {/* Video Mockup Screen */}
            <div className="relative w-full aspect-video rounded-2xl bg-[#030712] border border-[#1f293d] overflow-hidden flex flex-col items-center justify-center text-white">
              <div className="w-16 h-16 rounded-full bg-[#9F1D2C] text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                <Play size={24} className="ml-1" />
              </div>
              <span className="mt-4 text-[14px] font-medium text-[#9aacc6] font-red-hat">
                Interactive Institutional Sandbox Walkthrough
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-[#9aacc6] font-mono">
                <span>00:00 / 02:06</span>
                <span>HD 1080p &bull; Linkay Node Sandbox</span>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[13px] text-[#9aacc6] font-red-hat">
                Want a personalized walkthrough with our technical and structuring team?
              </p>
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full text-[13px] font-semibold text-white bg-[#9F1D2C] hover:bg-[#851823] transition-colors shadow-lg shadow-[#9F1D2C]/30"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
