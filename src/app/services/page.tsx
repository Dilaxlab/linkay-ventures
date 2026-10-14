import type { Metadata } from 'next';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  GitBranch,
  Globe2,
  Handshake,
  Landmark,
  Layers,
  Leaf,
  Lock,
  Network,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Investment, Advisory and Innovation Ecosystem | Linkay Ventures',
  description:
    "Explore Linkay Ventures' investment solutions, strategic advisory and innovation ecosystem for startups, growth-stage companies and asset owners.",
};

export default function ServicesPage() {
  const capitalSolutions = [
    {
      title: 'Venture & Growth Equity',
      tag: 'Seed to Growth',
      description:
        'Equity investment opportunities for startups with scalable models and meaningful market or societal impact.',
      icon: TrendingUp,
    },
    {
      title: 'Bonds & Funds',
      tag: 'Structured Capital',
      description:
        'Exploring venture bonds and thematic funds across AI, energy and healthcare innovation, subject to eligibility and applicable regulation.',
      icon: Landmark,
    },
    {
      title: 'Mergers & Acquisitions',
      tag: 'M&A Advisory',
      description:
        'Support for acquisition readiness, deal preparation and execution, so value is protected through every transition.',
      icon: GitBranch,
    },
    {
      title: 'Custom Capital Structures',
      tag: 'Tailored',
      description:
        'Bridge financing, convertible debt and syndicate investments, shaped around your goals and long-term vision.',
      icon: Settings2,
    },
  ];

  const strategyServices = [
    {
      title: 'Strategic Advisory',
      tag: 'Strategy',
      description:
        'Market entry, growth planning, competitive positioning and guidance on regulatory and compliance considerations in emerging industries.',
      icon: Compass,
    },
    {
      title: 'Mentorship Network',
      tag: 'Expert Network',
      description:
        'One-on-one access to experienced entrepreneurs, investors and industry leaders, matched to your sector, stage and challenges.',
      icon: Users,
    },
    {
      title: 'Operational Support',
      tag: 'Operations',
      description:
        'Process optimization, resource allocation, team building and leadership development for sustainable growth.',
      icon: ShieldCheck,
    },
    {
      title: 'Workshops & Training',
      tag: 'Education',
      description:
        'Sessions on fundraising, scaling and investor pitching, plus masterclasses with experienced venture professionals.',
      icon: Activity,
    },
  ];

  const ecosystemServices = [
    {
      title: 'Corporate Innovation Partnerships',
      tag: 'Partnerships',
      description:
        'Connecting startups with corporations to co-develop solutions and enter new markets.',
      icon: Handshake,
    },
    {
      title: 'Events & Networking',
      tag: 'Community',
      description:
        'Curated roundtables, meetups and innovation events that bring founders together with investors and partners.',
      icon: Network,
    },
    {
      title: 'Cross-Border Expansion',
      tag: 'Global Reach',
      description:
        'Support entering new markets through partners and advisors, covering localization, legal compliance and cultural adaptation.',
      icon: Globe2,
    },
    {
      title: 'Innovation Labs',
      tag: 'R&D',
      description:
        'Access to coworking, prototyping and research resources through ecosystem partners.',
      icon: Layers,
    },
    {
      title: 'Sustainability Integration',
      tag: 'Green Tech',
      description:
        'Working with ventures building green technologies, including eco-innovation challenges that address environmental and societal issues.',
      icon: Leaf,
    },
  ];

  const howWeWorkSteps = [
    { num: '01', title: 'Understand', desc: 'Active listening, context mapping and founder alignment.' },
    { num: '02', title: 'Assess', desc: 'Thorough feasibility, unit economics and regulatory audit.' },
    { num: '03', title: 'Design', desc: 'Tailored capital structuring, governance and roadmap design.' },
    { num: '04', title: 'Advance', desc: 'Disciplined execution, distribution and long-term scale.' },
  ];

  return (
    <main className="w-full bg-[#030712] text-[#f4f7ff] font-sans antialiased overflow-x-hidden selection:bg-[#9F1D2C] selection:text-white">
      
      {/* ============================================================== */}
      {/* 1. HERO                                                        */}
      {/* ============================================================== */}
      <section className="relative w-full pt-28 pb-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d] overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[350px] bg-[#00e5ff]/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[450px] h-[300px] bg-[#9F1D2C]/15 blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> OUR SERVICES
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Capital, guidance and connections{' '}
              <span className="text-[#00e5ff] drop-shadow-[0_0_25px_rgba(0,229,255,0.35)]">
                built for what&apos;s next.
              </span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#9aacc6] text-lg sm:text-xl leading-relaxed mb-10 font-normal max-w-2xl mx-auto">
              From investment structures to strategic advisory and a connected innovation ecosystem, Linkay Ventures supports ambitious ventures at every stage of growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-8 py-3.5 sm:px-9 sm:py-4 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
              >
                <span>Discuss Your Needs</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-white border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-sm font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                <span>Explore Venture HUB</span>
                <ArrowUpRight size={16} className="text-[#00e5ff]" />
              </Link>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-medium tracking-wider text-[#9aacc6]">
              <div className="flex items-center gap-2">
                <span className="text-[#00e5ff]">•</span>
                <span>Venture &amp; Growth Capital</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00e5ff]">•</span>
                <span>Strategic Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00e5ff]">•</span>
                <span>Innovation Ecosystem</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. 01 / CAPITAL                                                */}
      {/* ============================================================== */}
      <section className="w-full bg-[#050814] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]" id="capital">
        <div className="max-w-[1340px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span> 01 / CAPITAL
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Investment solutions.{' '}
                <span className="text-[#9aacc6] block sm:inline">Structured with intent.</span>
              </h2>

              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                A range of funding and capital strategies for qualified startups, growth-stage companies and strategic partners.
              </p>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-white border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-xs font-semibold px-6 py-2.5 rounded-full transition-all"
                >
                  <span>Discuss Capital Options</span>
                  <ArrowRight size={14} className="text-[#00e5ff]" />
                </Link>
              </div>
            </div>

            {/* Preserving existing image /images/service.jpeg with dark frame */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-2xl p-2 group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/service.jpeg"
                    alt="Investment Solutions"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capitalSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={19} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-[#71829e]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-red-hat text-[#9aacc6] text-xs sm:text-[13px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#1f293d] flex items-center gap-1.5 text-xs text-[#cad5e8]">
                    <CheckCircle2 size={12} className="text-[#00e5ff]" />
                    <span>Eligible Structures</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. 02 / STRATEGY                                               */}
      {/* ============================================================== */}
      <section className="w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]" id="strategy">
        <div className="max-w-[1340px] mx-auto">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span> 02 / STRATEGY
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Advisory and mentorship{' '}
                <span className="text-[#9aacc6] block sm:inline">from people who&apos;ve built.</span>
              </h2>

              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg font-normal">
                Practical guidance for founders navigating growth, markets and regulation.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-white border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-xs font-semibold px-6 py-2.5 rounded-full transition-all shrink-0"
            >
              <span>Talk to an Advisor</span>
              <ArrowRight size={14} className="text-[#00e5ff]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strategyServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={19} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-[#71829e]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-red-hat text-[#9aacc6] text-xs sm:text-[13px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#1f293d] flex items-center gap-1.5 text-xs text-[#cad5e8]">
                    <CheckCircle2 size={12} className="text-[#00e5ff]" />
                    <span>Domain Guidance</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. 03 / ECOSYSTEM                                              */}
      {/* ============================================================== */}
      <section className="w-full bg-[#050814] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]" id="ecosystem">
        <div className="max-w-[1340px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span> 03 / ECOSYSTEM
                </span>
              </div>

              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Beyond funding.{' '}
                <span className="text-[#9aacc6] block sm:inline">A connected ecosystem.</span>
              </h2>

              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                We connect startups, corporations, researchers and capital partners to accelerate collaboration and growth.
              </p>

              <div>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-xs font-semibold px-7 py-3 rounded-full transition-all shadow-md shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Preserving existing image /images/service1.jpeg with dark frame */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-2xl p-2 group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/service1.jpeg"
                    alt="Innovation Ecosystem"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 5 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {ecosystemServices.map((item, idx) => {
              const Icon = item.icon;
              const isLastTwo = idx >= ecosystemServices.length - 2;

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg ${
                    isLastTwo ? 'lg:col-span-3' : 'lg:col-span-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={19} />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-[#71829e]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-red-hat text-[#9aacc6] text-xs sm:text-[13px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#1f293d] flex items-center gap-1.5 text-xs text-[#cad5e8]">
                    <CheckCircle2 size={12} className="text-[#00e5ff]" />
                    <span>Ecosystem Access</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. 04 / HOW WE WORK                                            */}
      {/* ============================================================== */}
      <section className="w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]">
        <div className="max-w-[1340px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> 04 / HOW WE WORK
              </span>
            </div>
            <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-white">
              Understand → Assess → Design → Advance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howWeWorkSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#00e5ff] block mb-2">
                    PHASE {step.num}
                  </span>
                  <h3 className="font-poppins text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-red-hat text-xs sm:text-sm text-[#9aacc6] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. VENTURE HUB                                                 */}
      {/* ============================================================== */}
      <section className="w-full bg-[#050814] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]" id="venture-hub">
        <div className="max-w-[1340px] mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#080d1a] border border-[#1f293d] text-center relative max-w-[960px] mx-auto overflow-hidden shadow-2xl">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#9F1D2C]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                  <span>—</span> CONNECT VENTURE HUB
                </span>
              </div>

              <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Your resources.{' '}
                <span className="text-[#9aacc6] block sm:inline">One secure portal.</span>
              </h2>

              <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto font-normal">
                Access financial and technical solutions, expert connections and strategic tools, whether you&apos;re just starting or scaling fast.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="https://hub.linkayventures.com/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
                >
                  <Lock size={15} />
                  <span>Login to Venture HUB</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#080d1a] hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-sm font-semibold px-7 py-3.5 rounded-full transition-all"
                >
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. CLOSING CTA                                                 */}
      {/* ============================================================== */}
      <section className="w-full bg-[#030712] py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9F1D2C]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-[960px] mx-auto text-center relative z-10">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
              <span>—</span> THE NEXT OPPORTUNITY STARTS HERE
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
            Let&apos;s build what&apos;s next.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-8 py-3.5 sm:px-9 sm:py-4 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
            >
              <span>Contact Our Team</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-white border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-sm font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              <span>Talk to an Expert</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
