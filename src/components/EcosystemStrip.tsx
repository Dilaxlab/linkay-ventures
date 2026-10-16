'use client';

import { Globe2 } from 'lucide-react';

export default function EcosystemStrip() {
  const hubs = [
    { city: 'New York', role: 'Headquarters & Capital Markets' },
    { city: 'London', role: 'European Advisory & Structuring' },
    { city: 'Singapore', role: 'Asia-Pacific Growth Hub' },
    { city: 'Zurich', role: 'Digital Asset Governance' },
  ];

  return (
    <section className="w-full bg-transparent border-b border-[#D8D5B0] py-7 px-6 sm:px-12 lg:px-16">
      <div className="max-w-[1340px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#894541] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#894541]">
              Global Reach
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full md:w-auto">
            {hubs.map((hub, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="font-poppins text-sm font-bold text-[#004a80] tracking-wide">
                  {hub.city}
                </span>
                <span className="text-[11px] font-red-hat text-[#004a80] mt-0.5">
                  {hub.role}
                </span>
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#894541] px-4 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm font-bold">
            <Globe2 size={13} />
            <span>Cross-Border Connectivity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
