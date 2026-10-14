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
    <section className="w-full bg-[#060a16] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#233049]">
      <div className="max-w-[1240px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101a2a] border border-[#233049] text-[#4ee7ee] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9F1D2C]" />
            Testimonials
          </span>
          <h2 className="font-poppins text-[#f4f7ff] text-[30px] sm:text-[42px] font-bold leading-tight mb-4">
            Hear From Our Clients
          </h2>
          <div className="w-16 h-1 bg-[#9F1D2C] mx-auto rounded-full" />
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-[960px] mx-auto">
          {/* Main card */}
          <div className="relative bg-[#101a2a] rounded-2xl border border-[#233049] shadow-2xl hover:border-[#4ee7ee]/40 transition-all duration-300 p-8 sm:p-12 overflow-hidden">
            {/* Maroon accent corner glow */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#9F1D2C]/10 blur-3xl pointer-events-none" />

            {/* Top-row: quote icon + trust badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#9F1D2C]/15 border border-[#9F1D2C]/30 flex items-center justify-center text-[#4ee7ee]">
                <Quote size={20} />
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#cad8e9] bg-[#060a16] px-2.5 py-1 rounded border border-[#233049] uppercase tracking-wider">
                <CheckCircle2 size={12} className="text-[#4ee7ee]" />
                Verified Client
              </span>
            </div>

            {/* Quote */}
            <blockquote className="font-red-hat text-[17px] sm:text-[19px] md:text-[21px] text-[#e0e9f5] leading-relaxed mb-8 relative">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author row */}
            <div className="flex items-center gap-4 pt-6 border-t border-[#233049]">
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#233049] shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-poppins font-bold text-[16px] text-white truncate">
                  {current.name}
                </h4>
                <p className="font-red-hat text-[13.5px] text-[#9aacc6] truncate">
                  {current.role} · <span className="text-[#4ee7ee]">{current.company}</span>
                </p>
              </div>

              {/* 5-Star Rating */}
              <div className="hidden sm:flex items-center gap-0.5 text-[#e5bb79] shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* Bottom row: rating on mobile + controls */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#233049]">
              {/* Rating (mobile only) */}
              <div className="flex sm:hidden items-center gap-0.5 text-[#e5bb79]">
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
                        ? 'w-7 bg-[#9F1D2C]'
                        : 'w-2 bg-[#233049] hover:bg-[#324566]'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-xl bg-[#060a16] border border-[#233049] text-[#cad8e9] hover:bg-[#9F1D2C] hover:text-white hover:border-[#9F1D2C] flex items-center justify-center transition-all duration-200"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-xl bg-[#060a16] border border-[#233049] text-[#cad8e9] hover:bg-[#9F1D2C] hover:text-white hover:border-[#9F1D2C] flex items-center justify-center transition-all duration-200"
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
