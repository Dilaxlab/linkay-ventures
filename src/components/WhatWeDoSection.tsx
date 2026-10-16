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
    <section
      className="w-full bg-transparent py-14 sm:py-20 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]"
      id="platform"
    >
      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & Vision statement (4.5 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start w-full">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                <span>—</span>OUR PLATFORM
              </span>
            </div>

            <h2 className="font-poppins text-[#004a80] text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] mb-5 tracking-tight">
              One vision. Connected capabilities.
            </h2>

            <p className="font-red-hat text-[#004a80] text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Linkay Ventures brings together expertise, capital, and technology to create a unified
              ecosystem for sustainable growth and long-term value creation.
            </p>

            <Link
              href="/services"
              style={{ color: '#ffffff' }}
              className="inline-flex items-center justify-center gap-2 bg-[#894541] hover:bg-[#894541]/90 font-poppins text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-md shadow-[#894541]/25 hover:-translate-y-0.5 w-full sm:w-auto"
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
                  className="group p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#894541]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#894541]/5"
                >
                  <div>
                    {/* Icon Box */}
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:bg-[#894541] transition-all">
                      <Icon size={20} />
                    </div>

                    <h3 className="font-poppins text-lg sm:text-[19px] font-bold text-white mb-3 leading-snug group-hover:text-[#ffccd3] transition-colors">
                      {card.title}
                    </h3>

                    <p className="font-red-hat text-[#cad8e9] text-[13.5px] leading-relaxed mb-6 font-normal">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#ffccd3] transition-colors"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform"
                      />
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
