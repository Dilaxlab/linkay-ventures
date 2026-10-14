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
    <section className="w-full bg-[#050814] py-20 px-6 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]" id="digital-assets">
      <div className="max-w-[1340px] mx-auto relative z-10">

        {/* Header Block with Right Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> 02 / DIGITAL ASSET INFRASTRUCTURE
              </span>
            </div>

            <h2 className="font-poppins text-white text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.15] mb-4 tracking-tight">
              Bridging Real-World Value <br className="hidden sm:inline" />
              with Programmable Finance.
            </h2>

            <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base leading-relaxed font-normal">
              From tangible assets to digital opportunities, our platform infrastructure is engineered
              to unlock liquidity, enhance transparency, and expand global market connectivity.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/rwa-tokenization"
              className="inline-flex items-center gap-2 bg-[#0b1220] hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              <span>Explore RWA Platform</span>
              <ArrowRight size={14} />
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
                className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 group"
              >
                <div>
                  {/* Cyan Icon Box */}
                  <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 flex items-center justify-center text-[#00e5ff] mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-poppins text-lg font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-red-hat text-[#9aacc6] text-[13px] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Checklist with Red Checkmarks */}
                <div className="pt-4 border-t border-[#1f293d] space-y-2">
                  {item.checklist.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-[#cad8e9]">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
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
