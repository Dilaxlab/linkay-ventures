'use client';

import { ArrowRight, Check, Cpu, Globe2, Handshake, Layers, Leaf, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function InvestmentThemesSection() {
  const cards = [
    {
      icon: Cpu,
      title: 'AI & Emerging Technologies',
      description:
        'Investing in next-generation technologies like AI, blockchain, and automation to shape a smarter, more efficient future.',
      actionText: 'Learn More',
      href: '/programs',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Stage Venture Finance',
      description:
        'Backing high-potential startups with capital, mentorship, and strategic support for scalable growth.',
      actionText: 'Learn More',
      href: '/services',
    },
    {
      icon: Globe2,
      title: 'Global Expert Network',
      description:
        'Connecting with industry leaders, advisors, and partners across the world to unlock new opportunities.',
      actionText: 'Learn More',
      href: '/about',
    },
    {
      icon: Layers,
      title: 'Digital Assets & Tokenized RWAs',
      description:
        'Enabling real-world asset tokenization for greater liquidity, transparency, and global access.',
      actionText: 'Learn More',
      href: '/rwa-tokenization',
    },
    {
      icon: Leaf,
      title: 'Sustainable Impact',
      description:
        'Supporting ventures that drive social and environmental progress for a better tomorrow.',
      actionText: 'Learn More',
      href: '/services',
    },
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description:
        'Collaborating with trusted partners to expand reach, share expertise, and create lasting value.',
      actionText: 'Learn More',
      href: '/contact',
    },
  ];

  return (
    <section className="w-full bg-[#030712] py-14 sm:py-20 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]" id="focus-areas">
      <div className="max-w-[1340px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span>INVESTMENT THEMES
              </span>
            </div>

            <h2 className="font-poppins text-white text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] mb-4 tracking-tight">
              Focus Areas Driving the Future <br className="hidden sm:inline" />
              of Capital.
            </h2>

            <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base leading-relaxed font-normal">
              We invest in and support innovative solutions across key sectors, building a more
              resilient, inclusive, and digitally connected global economy.
            </p>
          </div>

          {/* Right Tabs / Indicator Pills */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-mono tracking-wider text-[#9aacc6]">
            <span className="text-[#8c1627] font-semibold flex items-center gap-1.5">
              <span>—</span> Technology
            </span>
            <span className="hover:text-white transition-colors cursor-default flex items-center gap-1.5">
              <span>•</span> Real Assets
            </span>
            <span className="hover:text-white transition-colors cursor-default flex items-center gap-1.5">
              <span>•</span> Global Reach
            </span>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8c1627]/5 group"
              >
                <div>
                  {/* Cyan Icon Box */}
                  <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 flex items-center justify-center text-[#8c1627] mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#8c1627] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-red-hat text-[#9aacc6] text-[13.5px] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1f293d] flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#cad8e9] hover:text-[#8c1627] transition-colors group/link"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                      <Check size={10} className="stroke-[3]" />
                    </span>
                    <span>{item.actionText}</span>
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
