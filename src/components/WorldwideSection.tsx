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
      className="relative w-full py-20 px-6 sm:px-12 lg:px-16 bg-transparent overflow-hidden border-b border-[#C5CDD7]"
    >
      {/* Background world map */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/map-bg.jpg"
          alt="World Map Background"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.08 }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[850px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#894541]" />
            <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#894541]">
              Worldwide Experience
            </span>
          </div>
          <h2 className="font-poppins text-[#004a80] text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            We Always Try To Understand
            <br className="hidden sm:inline" /> Clients&apos; Expectation
          </h2>
          <p className="font-red-hat text-[#004a80] text-[16px] sm:text-[17px] leading-relaxed max-w-[720px] mx-auto">
            We prioritize understanding and exceeding client expectations through tailored solutions
            and unwavering support.
          </p>
          <div className="w-16 h-1 bg-[#894541] mx-auto mt-6 rounded-full" />
        </div>

        {/* Counter Card */}
        <div className="max-w-[820px] mx-auto">
          <div
            className="relative rounded-3xl border-2 border-[#003860] shadow-2xl shadow-[#004a80]/30 p-8 sm:p-12 overflow-hidden text-center text-white"
            style={{ backgroundColor: '#004a80' }}
          >
            {/* Ambient glows */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#894541]/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[#894541]/25 blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <p className="font-poppins text-[14px] sm:text-[15px] uppercase tracking-wider text-[#cad8e9] font-bold mb-4">
                Positive Feedback
              </p>

              <div className="font-poppins font-bold leading-none tracking-tight flex items-start justify-center">
                <span className="text-white text-[88px] sm:text-[128px] lg:text-[148px]">
                  {count}
                </span>
                <span className="text-[#ffccd3] text-[42px] sm:text-[60px] lg:text-[72px] mt-3 sm:mt-4 lg:mt-5 ml-1">
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
