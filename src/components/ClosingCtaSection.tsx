'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClosingCtaSection() {
  return (
    <section className="relative w-full bg-[#030712] py-16 sm:py-24 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] border-b border-[#1f293d] overflow-hidden" id="cta">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#9F1D2C]/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#00e5ff]/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins text-white text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12] mb-6 tracking-tight">
              Let&apos;s build{' '}
              <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]">
                what&apos;s next.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal">
              Connect with our team to explore how Linkay Ventures can help you unlock value, access
              new markets, and build a more sustainable future.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm sm:text-[15px] font-semibold px-8 py-3.5 sm:px-9 sm:py-4 rounded-full shadow-lg shadow-[#9F1D2C]/30 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#080d1a] hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-sm sm:text-[15px] font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore Our Platform</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Glowing Wireframe Sphere Graphic (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full flex items-center justify-center">
              {/* Radial Cyan & Red Glows */}
              <div className="absolute inset-0 bg-radial from-[#00e5ff]/20 via-[#9F1D2C]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Glowing Wireframe Globe / Digital Sphere */}
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center opacity-90">
                <Image
                  src="/images/uilivuerqgliuer-1024x1024.png"
                  alt="Connected Digital Sphere"
                  fill
                  className="object-contain scale-110 drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]"
                  sizes="(max-width: 768px) 300px, 460px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
