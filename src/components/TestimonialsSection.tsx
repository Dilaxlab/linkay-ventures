'use client';

import { CheckCircle2, ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah T',
    role: 'Founder',
    company: 'GreenFuture',
    quote:
      'Linkay Ventures was instrumental in our growth, providing not only funding but also invaluable guidance.',
    avatar: '/images/testimonial-avatar.jpg',
  },
  {
    name: 'James P',
    role: 'CEO',
    company: 'DataConnect',
    quote:
      "Their team's expertise and support helped us launch faster and stronger than we imagined.",
    avatar: '/images/testimonial-avatar.jpg',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-transparent py-20 px-6 sm:px-12 lg:px-16 border-b border-[#C5CDD7]" id="testimonials">
      <div className="max-w-[1240px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#894541]" />
            <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#894541]">
              Testimonials
            </span>
          </div>
          <h2 className="font-poppins text-[#004a80] text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            Hear From Our Clients
          </h2>
          <div className="w-16 h-1 bg-[#894541] mx-auto rounded-full" />
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-[960px] mx-auto">
          {/* Main card */}
          <div
            className="relative rounded-3xl border-2 border-[#003860] shadow-2xl shadow-[#004a80]/30 transition-all duration-300 p-8 sm:p-12 overflow-hidden text-white"
            style={{ backgroundColor: '#004a80' }}
          >
            {/* Burgundy accent corner glow */}
            <div className="absolute top-0 right-0 w-52 h-52 rounded-full bg-[#894541]/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 rounded-full bg-[#894541]/20 blur-3xl pointer-events-none" />

            {/* Top-row: quote icon + trust badge */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                <Quote size={20} />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#894541] bg-white px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                <CheckCircle2 size={13} className="text-[#894541]" />
                Verified Client
              </span>
            </div>

            {/* Quote */}
            <blockquote className="font-red-hat text-[17px] sm:text-[19px] md:text-[21px] text-[#cad8e9] leading-relaxed mb-8 relative z-10">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author row */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/15 relative z-10">
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-md">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-poppins font-bold text-[17px] text-white truncate">
                  {current.name}
                </h4>
                <p className="font-red-hat text-[13.5px] text-[#cad8e9] truncate">
                  {current.role} · <span className="text-[#ffccd3] font-semibold">{current.company}</span>
                </p>
              </div>

              {/* 5-Star Rating */}
              <div className="hidden sm:flex items-center gap-1 text-[#ffd166] shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* Bottom row: rating on mobile + controls */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/15 relative z-10">
              {/* Rating (mobile only) */}
              <div className="flex sm:hidden items-center gap-1 text-[#ffd166]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-7 bg-[#894541]'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
