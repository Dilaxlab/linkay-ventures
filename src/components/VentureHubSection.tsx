'use client';

import { ArrowUpRight, Lock } from 'lucide-react';
import Link from 'next/link';

export default function VentureHubSection() {
  return (
    <section className="w-full bg-transparent py-20 px-6 sm:px-12 lg:px-16 border-b border-[#C5CDD7]" id="venture-hub">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="p-8 sm:p-14 rounded-3xl text-white border-2 border-[#003860] text-center relative max-w-[960px] mx-auto overflow-hidden shadow-2xl shadow-[#004a80]/30"
          style={{ backgroundColor: '#004a80' }}
        >
          {/* Subtle burgundy ambient glow for depth */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#A12B3C]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[#A12B3C]/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Eyebrow badge: #A12B3C and bold with #DDE2E8 background */}
            <div className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-md">
              <span className="text-xs sm:text-[13px] font-mono font-black tracking-[0.2em] text-[#A12B3C] uppercase flex items-center gap-2">
                <span>—</span> SECURE CLIENT PORTAL
              </span>
            </div>

            {/* Heading: white */}
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white tracking-tight">
              Venture HUB
            </h2>

            {/* Description: light gray */}
            <p className="font-red-hat text-[#cad8e9] text-base sm:text-lg mb-9 leading-relaxed max-w-xl mx-auto font-normal">
              Access financial and technical resources, expert connections and strategic tools in one secure portal.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-sm font-bold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#A12B3C]/40 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Lock size={15} />
                <span>Login to Venture HUB</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#DDE2E8] hover:bg-[#cad2dc] text-[#01497f] font-poppins text-sm font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:-translate-y-0.5 w-full sm:w-auto border-2 border-[#DDE2E8]"
                style={{ color: '#01497f' }}
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
