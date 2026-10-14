'use client';

import { Cpu, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function FeaturesSection() {
  const highlights = [
    { icon: Cpu, label: 'AI & Emerging Tech' },
    { icon: TrendingUp, label: 'Growth-Stage Finance' },
    { icon: Globe, label: 'Global Expert Network' },
  ];

  return (
    <section className="w-full bg-[#060a16] text-[#f4f7ff] py-20 px-6 sm:px-12 lg:px-16 overflow-hidden border-b border-[#233049]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pill badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-[#4ee7ee] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9F1D2C]" />
              Features
            </span>

            {/* Title */}
            <h2 className="font-poppins text-[#f4f7ff] text-[30px] sm:text-[40px] font-bold leading-tight mb-4">
              Finance with expert leaders
            </h2>

            {/* Brand maroon underline */}
            <div className="w-12 h-1 bg-[#9F1D2C] mb-6 rounded-full" />

            {/* Paragraphs */}
            <div className="space-y-5 text-[#9aacc6] font-red-hat text-[16px] sm:text-[17px] leading-relaxed mb-8">
              <p>
                We offer the resources and support needed to scale the next generation of startups
                and growth-stage companies. Linkay Ventures is a brainchild of serial entrepreneurs
                who are seasoned professionals in the field of AI, cutting-edge technologies, and
                Finance — with expert leaders in the US and around the world that will define the
                future and make positive impact.
              </p>
              <p>
                Our belief in leveraging technology drives us to provide clients with financial
                products and solutions that offer superior performance &amp; access to innovative
                investments aligned with their long-term objectives.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#101a2a] border border-[#233049] text-[13px] font-medium text-[#c0cfde] hover:border-[#4ee7ee]/50 hover:bg-[#15233a] transition-colors"
                  >
                    <IconComp size={15} className="text-[#4ee7ee] shrink-0" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden bg-[#101a2a] shadow-2xl border border-[#233049] group">
              <Image
                src="/images/home.jpeg"
                alt="Finance with expert leaders in the US"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Subtle overlay for premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a16]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
