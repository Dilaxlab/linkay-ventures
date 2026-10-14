'use client';

import { ArrowUpRight, Lock } from 'lucide-react';
import Link from 'next/link';

export default function VentureHubSection() {
  return (
    <section className="w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]" id="venture-hub">
      <div className="max-w-[1240px] mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080d1a] text-[#f4f7ff] border border-[#1f293d] text-center relative max-w-[960px] mx-auto overflow-hidden shadow-2xl">
          {/* Subtle maroon & cyan glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#00e5ff]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#9F1D2C]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Small eyebrow badge */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> SECURE CLIENT PORTAL
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Venture HUB
            </h2>

            {/* Shortened Description as requested */}
            <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto font-normal">
              Access financial and technical resources, expert connections and strategic tools in one secure portal.
            </p>

            {/* Buttons */}
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
                className="bg-[#030712] hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
