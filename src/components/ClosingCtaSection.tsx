'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClosingCtaSection() {
  return (
    <section className="relative w-full bg-transparent py-16 sm:py-24 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] border-b border-[#C5CDD7] overflow-hidden" id="cta">
      <div className="relative z-10 max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#A12B3C] uppercase flex items-center gap-2">
                <span>—</span> LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins text-[#004a80] text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12] mb-6 tracking-tight">
              Let&apos;s build{' '}
              <span className="text-[#A12B3C]">
                what&apos;s next.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-red-hat text-[#004a80] text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal">
              Connect with our team to explore how Linkay Ventures can help you unlock value, access
              new markets, and build a more sustainable future.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-sm sm:text-[15px] font-bold px-8 py-3.5 sm:px-9 sm:py-4 rounded-full shadow-lg shadow-[#A12B3C]/40 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#DDE2E8] hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-sm sm:text-[15px] font-bold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Explore Our Platform</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Glowing Wireframe Sphere Graphic (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full flex items-center justify-center">
              {/* Radial Cyan & Red Glows */}
              <div className="absolute inset-0 bg-radial from-[#A12B3C]/20 via-[#A12B3C]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Glowing Wireframe Globe / Digital Sphere */}
              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center opacity-90">
                <Image
                  src="/images/uilivuerqgliuer-1024x1024.png"
                  alt="Connected Digital Sphere"
                  fill
                  className="object-contain scale-110 drop-shadow-[0_0_35px_rgba(161, 43, 60,0.4)]"
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
