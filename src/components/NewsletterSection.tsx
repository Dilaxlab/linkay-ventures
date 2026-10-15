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
    <section className="w-full bg-transparent py-14 px-6 sm:px-12 lg:px-16 text-[#f4f7ff] border-b border-[#C5CDD7] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto relative z-10">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-10 rounded-3xl bg-[#004a80] border-2 border-[#003860] shadow-2xl shadow-[#004a80]/30 text-white"
          style={{ backgroundColor: '#004a80' }}
        >
          
          {/* Left: Copy without chips */}
          <div className="flex items-center gap-5 max-w-xl text-center lg:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/15 border border-white/25 items-center justify-center text-white shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider font-bold block mb-1" style={{ color: '#ffccd3' }}>
                Newsletter
              </span>
              <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl font-bold leading-snug" style={{ color: '#ffffff' }}>
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
                    className="w-full bg-[#003860] border border-[#005fa3] rounded-full px-5 py-3 text-sm text-white placeholder-[#8da5c4] focus:outline-none focus:border-white transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-md shadow-[#A12B3C]/40 hover:-translate-y-0.5 shrink-0"
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
              <p className="text-xs text-rose-300 mt-2 text-center lg:text-left font-mono">
                Please enter a valid email address.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
