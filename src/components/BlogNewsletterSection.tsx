'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import Link from 'next/link';

export default function BlogNewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 0) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#050814] py-16 sm:py-24 px-5 sm:px-12 lg:px-16 border-b border-[#1f293d] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9F1D2C]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[820px] mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center justify-center gap-2">
            <span>—</span> STAY INFORMED
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-poppins text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Get our latest insights <br />
          <span className="text-[#8c1627] drop-shadow-[0_0_20px_rgba(140,22,39,0.25)]">in your inbox.</span>
        </h2>

        {/* Body */}
        <p className="font-red-hat text-[#9aacc6] text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Occasional perspectives on venture, digital assets and emerging financial infrastructure. No spam.
        </p>

        {/* Interactive Subscription Form */}
        {subscribed ? (
          <div className="p-5 rounded-2xl bg-[#080d1a] border border-[#8c1627]/40 max-w-md mx-auto flex items-center justify-center gap-3 text-sm font-poppins text-white animate-in fade-in duration-300">
            <CheckCircle2 size={18} className="text-[#8c1627]" />
            <span>Thank you for subscribing to Linkay Perspectives.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71829e]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-[#080d1a] border border-[#1f293d] focus:border-[#8c1627] rounded-full py-3.5 pl-11 pr-5 text-sm font-red-hat text-white placeholder-[#71829e] outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5 shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        {/* Small questions link */}
        <div className="pt-2">
          <Link
            href="/contact"
            className="text-xs font-mono text-[#71829e] hover:text-[#8c1627] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Questions? Contact our team</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
