'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function WorldwideSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = 100;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 sm:px-12 lg:px-16 bg-[#060a16] overflow-hidden border-b border-[#233049]"
    >
      {/* Background world map */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/map-bg.jpg"
          alt="World Map Background"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.15, filter: 'invert(1) hue-rotate(180deg)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(6,10,22,0.85) 0%, rgba(6,10,22,0.92) 50%, rgba(6,10,22,0.98) 100%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#060a16] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060a16] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[850px] mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101a2a]/90 backdrop-blur-sm border border-[#233049] text-[#4ee7ee] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9F1D2C]" />
            Worldwide Experience
          </span>
          <h2 className="font-poppins text-[#f4f7ff] text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            We Always Try To Understand
            <br className="hidden sm:inline" /> Clients&apos; Expectation
          </h2>
          <p className="font-red-hat text-[#9aacc6] text-[16px] sm:text-[17px] leading-relaxed max-w-[720px] mx-auto">
            We prioritize understanding and exceeding client expectations through tailored solutions
            and unwavering support.
          </p>
          <div className="w-16 h-1 bg-[#9F1D2C] mx-auto mt-6 rounded-full" />
        </div>

        {/* Counter */}
        <div className="max-w-[820px] mx-auto">
          <div className="relative bg-[#101a2a]/95 backdrop-blur-sm rounded-2xl border border-[#233049] shadow-2xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#9F1D2C]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[#4ee7ee]/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <p className="font-poppins text-[14px] sm:text-[15px] uppercase tracking-wider text-[#cad8e9] font-bold mb-4">
                Positive Feedback
              </p>

              <div className="font-poppins font-bold leading-none tracking-tight flex items-start justify-center">
                <span className="text-[#9F1D2C] text-[88px] sm:text-[128px] lg:text-[148px]">
                  {count}
                </span>
                <span className="text-[#4ee7ee] text-[42px] sm:text-[60px] lg:text-[72px] mt-3 sm:mt-4 lg:mt-5 ml-1">
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
