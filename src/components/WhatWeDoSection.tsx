'use client';

import { ArrowRight, BarChart3, Layers, UserCheck } from 'lucide-react';
import Link from 'next/link';

interface PlatformCard {
  title: string;
  description: string;
  href: string;
  ctaText: string;
  icon: any;
}

const platformCards: PlatformCard[] = [
  {
    title: 'Investment Solutions',
    description:
      'Tailored investment strategies across traditional and alternative assets, designed for long-term wealth creation.',
    href: '/services',
    ctaText: 'Explore Solutions',
    icon: BarChart3,
  },
  {
    title: 'Strategic Advisory',
    description:
      'Expert guidance on capital structuring, market entry, and growth strategy for global opportunities.',
    href: '/services',
    ctaText: 'Learn More',
    icon: UserCheck,
  },
  {
    title: 'Digital Assets & Tokenization',
    description:
      'Bridging real-world assets with blockchain technology for greater liquidity, transparency, and accessibility.',
    href: '/rwa-tokenization',
    ctaText: 'View Services',
    icon: Layers,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-[#030712] py-14 sm:py-20 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]" id="platform">
      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Heading & Vision statement (4.5 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start w-full">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span>OUR PLATFORM
              </span>
            </div>

            <h2 className="font-poppins text-white text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] mb-5 tracking-tight">
              One vision. Connected capabilities.
            </h2>

            <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Linkay Ventures brings together expertise, capital, and technology to create a unified
              ecosystem for sustainable growth and long-term value creation.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-md shadow-[#9F1D2C]/25 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Explore Platform Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Column: 3 Cards Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {platformCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8c1627]/5"
                >
                  <div>
                    {/* Cyan Icon Box */}
                    <div className="w-11 h-11 rounded-xl bg-[#8c1627]/10 border border-[#8c1627]/25 flex items-center justify-center text-[#8c1627] mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>

                    <h3 className="font-poppins text-lg sm:text-[19px] font-bold text-white mb-3 leading-snug group-hover:text-[#8c1627] transition-colors">
                      {card.title}
                    </h3>

                    <p className="font-red-hat text-[#9aacc6] text-[13.5px] leading-relaxed mb-6 font-normal">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1f293d]">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c1627] hover:text-white transition-colors"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
