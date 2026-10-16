'use client';

import { ArrowRight, Target } from 'lucide-react';
import Link from 'next/link';

export default function HowWeWorkSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategic Audit',
      description: 'Validate opportunity, assess risk, and define value proposition.',
    },
    {
      num: '02',
      title: 'Structuring & Architecture',
      description: 'Build the right structure, technology, and governance framework.',
    },
    {
      num: '03',
      title: 'Execution & Onboarding',
      description: 'Develop, deploy, and integrate with trusted partners.',
    },
    {
      num: '04',
      title: 'Growth & Market Connectivity',
      description: 'Scale operations, expand networks, and create liquidity.',
    },
  ];

  return (
    <section
      className="w-full bg-transparent py-14 sm:py-20 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]"
      id="how-we-work"
    >
      <div className="max-w-[1340px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                <span>—</span>HOW WE WORK
              </span>
            </div>

            <h2 className="font-poppins text-[#004a80] text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] mb-4 tracking-tight">
              Disciplined execution from <br className="hidden sm:inline" />
              concept to scale.
            </h2>

            <p className="font-red-hat text-[#004a80] text-sm sm:text-base leading-relaxed font-normal">
              We turn bold ideas into real-world impact through a structured, strategic, and
              hands-on approach — from due diligence to long-term success.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/services"
              style={{ color: '#ffffff' }}
              className="inline-flex items-center justify-center gap-2 bg-[#894541] hover:bg-[#894541]/90 font-poppins text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 w-full sm:w-auto shadow-md"
            >
              <span>View Our Process</span>
              <ArrowRight size={14} style={{ color: '#ffffff' }} />
            </Link>
          </div>
        </div>

        {/* 4 Connected Process Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-start relative group">
              {/* Node Circle */}
              <div className="flex items-center w-full mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-[#894541] bg-[#004a80] flex items-center justify-center font-mono font-bold text-sm text-white group-hover:bg-[#894541] group-hover:text-white transition-colors shrink-0 shadow-lg shadow-[#004a80]/30">
                  {step.num}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center flex-1 ml-4 mr-2">
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#894541] to-[#894541]/30" />
                    <ArrowRight size={14} className="text-[#894541] -ml-1 shrink-0" />
                  </div>
                )}
              </div>

              <h3 className="font-poppins text-lg font-bold text-[#004a80] mb-2 group-hover:text-[#894541] transition-colors">
                {step.title}
              </h3>

              <p className="font-red-hat text-[#004a80] text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div
          className="p-6 sm:p-8 rounded-3xl bg-[#004a80] border-2 border-[#003860] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-[#004a80]/30 text-white"
          style={{ backgroundColor: '#004a80' }}
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h4
                className="font-poppins text-white text-base sm:text-lg font-bold"
                style={{ color: '#ffffff' }}
              >
                Ready to turn more opportunities into lasting value?
              </h4>
              <p
                className="font-red-hat text-[#cad8e9] text-xs sm:text-sm mt-0.5 font-normal"
                style={{ color: '#cad8e9' }}
              >
                Let&apos;s explore how Linkay Ventures can help you achieve your investment and
                growth goals.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#894541] hover:bg-[#894541]/90 text-white font-poppins text-xs sm:text-sm font-bold px-7 py-3 rounded-full transition-all shadow-md shadow-[#894541]/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Get Started</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
