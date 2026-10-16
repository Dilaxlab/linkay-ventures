'use client';

import { ArrowRight, Check, Coins, Droplets, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function DigitalAssetSection() {
  const cards = [
    {
      icon: Coins,
      title: 'Tokenization Engines',
      description:
        'Convert real-world assets into secure, programmable digital tokens, enabling faster, simpler, and borderless transactions.',
      checklist: ['Asset Tokenization', 'Smart Contracts', 'Secondary Markets'],
    },
    {
      icon: ShieldCheck,
      title: 'Compliance & Verification',
      description:
        'Ensure regulatory compliance and build trust through robust verification and monitoring systems.',
      checklist: ['KYC / AML', 'On-chain Verification', 'Audits & Reporting'],
    },
    {
      icon: Droplets,
      title: 'Liquidity & Custody Connectivity',
      description:
        'Seamless integration with liquidity providers and secure custody solutions for institutional and retail investors.',
      checklist: ['Liquidity Providers', 'Secure Custody', 'Multi-Chain Connectivity'],
    },
    {
      icon: Globe,
      title: 'RWA Ecosystem',
      description:
        'Access to diversified real-world assets including real estate, commodities, and private markets.',
      checklist: ['Real Estate', 'Commodities', 'Private Equity'],
    },
  ];

  return (
    <section
      className="w-full bg-transparent py-14 sm:py-20 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]"
      id="digital-assets"
    >
      <div className="max-w-[1340px] mx-auto relative z-10">
        {/* Header Block with Right Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                <span>—</span>DIGITAL ASSET INFRASTRUCTURE
              </span>
            </div>

            <h2 className="font-poppins text-[#004a80] text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] mb-4 tracking-tight">
              Bridging Real-World Value <br className="hidden sm:inline" />
              with Programmable Finance.
            </h2>

            <p className="font-red-hat text-[#004a80] text-sm sm:text-base leading-relaxed font-normal">
              From tangible assets to digital opportunities, our platform infrastructure is
              engineered to unlock liquidity, enhance transparency, and expand global market
              connectivity.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/rwa-tokenization"
              className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm font-bold px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Explore RWA Platform</span>
              <ArrowRight size={16} />
            </Link>

          
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#004a80] border border-[#003860] hover:border-white/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#004a80]/30 group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#ffccd3] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-red-hat text-[#cad8e9] text-[13px] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Checklist with Checkmarks */}
                <div className="pt-4 border-t border-white/15 space-y-2">
                  {item.checklist.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-center gap-2 text-xs font-mono text-[#cad8e9]"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                        <Check size={10} className="stroke-[3]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
