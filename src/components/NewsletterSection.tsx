'use client';

import { CheckCircle2, Loader2, Mail, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 600);
  };

  return (
    <section className="w-full bg-[#030712] py-14 px-6 sm:px-12 lg:px-16 text-[#f4f7ff] border-b border-[#1f293d] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-10 rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-xl">
          
          {/* Left: Copy without chips */}
          <div className="flex items-center gap-5 max-w-xl text-center lg:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-[#030712] border border-[#1f293d] items-center justify-center text-[#00e5ff] shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-1">
                Newsletter
              </span>
              <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                Stay informed on markets, funds and digital asset insights.
              </h3>
            </div>
          </div>

          {/* Right: Email Form */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {status === 'success' ? (
              <div className="flex items-center justify-center lg:justify-start gap-2.5 px-6 py-3.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm font-medium animate-fade-in">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Thank you. You have been added to our distribution list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    required
                    className="w-full bg-[#030712] border border-[#1f293d] rounded-full px-5 py-3 text-sm text-white placeholder-[#71829e] focus:outline-none focus:border-[#00e5ff] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-md shadow-[#9F1D2C]/30 hover:-translate-y-0.5 shrink-0"
                >
                  {status === 'loading' ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-xs text-rose-400 mt-2 text-center lg:text-left font-mono">
                Please enter a valid email address.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
