'use client';

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Venture & Growth Capital',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Global Headquarters',
      tag: 'New York, NY',
      lines: ['Linkay Ventures Inc.', '295 Madison Avenue, 12th Flr', 'New York, NY 10017'],
      href: null,
    },
    {
      icon: Phone,
      title: 'Direct Phone & Desk',
      tag: 'Advisory Desk (ET)',
      lines: ['+1 917 816 8128', 'Mon – Fri, 9:00 AM – 6:00 PM ET'],
      href: 'tel:+19178168128',
    },
    {
      icon: Mail,
      title: 'Official Inquiries',
      tag: 'Encrypted & Monitored',
      lines: ['info@linkayventures.com', 'partnerships@linkayventures.com'],
      href: 'mailto:info@linkayventures.com',
    },
  ];

  return (
    <main className="w-full bg-[#030712] text-[#f4f7ff] font-sans antialiased overflow-x-hidden selection:bg-[#9F1D2C] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full pt-20 sm:pt-28 pb-14 sm:pb-20 px-5 sm:px-12 lg:px-16 border-b border-[#1f293d] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[350px] bg-[#00e5ff]/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[450px] h-[300px] bg-[#9F1D2C]/15 blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
                <span>—</span> CONNECT WITH LINKAY VENTURES
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-3xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              Start the{' '}
              <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]">
                conversation.
              </span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#9aacc6] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Have an asset to tokenize, a venture ready to scale, or an institutional partnership in mind? Our senior leadership is ready to connect.
            </p>

            {/* Micro chips */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#9aacc6]">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </span>
                <span>Response Within 24h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </span>
                <span>Confidential Under NDA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#9F1D2C]/20 text-[#9F1D2C] flex items-center justify-center shrink-0">
                  <Check size={10} className="stroke-[3]" />
                </span>
                <span>Global Advisory Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CONTACT FORM & DIRECT LINE SPLIT                            */}
      {/* ============================================================== */}
      <section id="contact-form" className="relative w-full py-14 sm:py-24 px-4 sm:px-12 lg:px-16 max-w-[1240px] mx-auto border-b border-[#1f293d]">
        <div className="relative max-w-[1180px] mx-auto">
          {/* Subtle outer glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-r from-[#9F1D2C]/15 via-[#00e5ff]/10 to-[#9F1D2C]/15 blur-2xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-[28px] border border-[#1f293d] bg-[#080d1a] shadow-2xl">
            {/* LEFT PANEL — Dark Direct Line (5 cols) */}
            <div className="lg:col-span-5 bg-[#050814] p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#1f293d] flex flex-col justify-between relative overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#9F1D2C]/15 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#00e5ff]/10 blur-3xl" />

              <div className="relative z-10">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2 mb-6">
                  <span>—</span> DIRECT ADVISORY LINE
                </span>

                <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Talk to a partner,{' '}
                  <span className="text-[#00e5ff]">not a bot.</span>
                </h3>

                <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base leading-relaxed mb-8">
                  Every inquiry reaches a senior team member directly. We assess structural feasibility, venture alignment, and capital requirements under strict confidentiality.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center shrink-0">
                      <MapPin size={19} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#71829e] uppercase tracking-wider block">Office</span>
                      <p className="text-white text-sm font-poppins font-medium mt-0.5 leading-snug">
                        295 Madison Avenue, 12th Flr<br />
                        New York, NY 10017
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center shrink-0">
                      <Mail size={19} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#71829e] uppercase tracking-wider block">Email</span>
                      <a
                        href="mailto:info@linkayventures.com"
                        className="text-white hover:text-[#00e5ff] text-sm font-poppins font-medium mt-0.5 block transition-colors"
                      >
                        info@linkayventures.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center shrink-0">
                      <Phone size={19} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#71829e] uppercase tracking-wider block">Phone &amp; WhatsApp</span>
                      <a
                        href="tel:+19178168128"
                        className="text-white hover:text-[#00e5ff] text-sm font-poppins font-medium mt-0.5 block transition-colors"
                      >
                        +1 917 816 8128 (Phone)
                      </a>
                      <span className="text-[#9aacc6] text-xs font-mono block mt-0.5">
                        WhatsApp: +1 646 945 7720
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#1f293d] relative z-10 flex items-center gap-2 text-xs font-mono text-[#71829e]">
                <Clock size={13} className="text-[#00e5ff]" />
                <span>Hours: 9:00 AM – 6:00 PM ET</span>
              </div>
            </div>

            {/* RIGHT PANEL — Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-[#080d1a]">
              {submitted ? (
                <div className="flex h-full min-h-[440px] flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/40 text-[#00e5ff] flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/10">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-poppins text-white text-2xl font-bold mb-3">
                    Message Received
                  </h3>
                  <p className="font-red-hat text-[#9aacc6] text-base leading-relaxed max-w-md mb-8">
                    Thank you for reaching out. A partner from our New York desk will review your inquiry and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-7 py-3 rounded-full bg-[#030712] border border-[#1f293d] hover:border-[#00e5ff]/50 text-white text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white mb-2">
                      Send a Message
                    </h3>
                    <p className="font-red-hat text-xs sm:text-sm text-[#9aacc6]">
                      Provide a brief overview of your enterprise or asset structure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#cad5e8] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1f293d] text-white text-sm placeholder-[#71829e] focus:border-[#00e5ff] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#cad5e8] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1f293d] text-white text-sm placeholder-[#71829e] focus:border-[#00e5ff] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#cad5e8] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1f293d] text-white text-sm placeholder-[#71829e] focus:border-[#00e5ff] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#cad5e8] mb-2">
                        Practice Area
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1f293d] text-white text-sm focus:border-[#00e5ff] focus:outline-none transition-colors"
                      >
                        <option value="Venture & Growth Capital">Venture & Growth Capital</option>
                        <option value="Strategic Advisory & M&A">Strategic Advisory & M&A</option>
                        <option value="RWA Tokenization">RWA Tokenization</option>
                        <option value="Venture Accelerator Programs">Venture Accelerator Programs</option>
                        <option value="Corporate Partnerships">Corporate Partnerships</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#cad5e8] mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your venture, asset, or collaboration goals..."
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-[#1f293d] text-white text-sm placeholder-[#71829e] focus:border-[#00e5ff] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-lg shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
                  >
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. 3 CONTACT CARDS                                             */}
      {/* ============================================================== */}
      <section className="w-full py-14 sm:py-24 px-5 sm:px-12 lg:px-16 max-w-[1240px] mx-auto" id="office-info">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#00e5ff] font-semibold">
                      {card.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center group-hover:bg-[#9F1D2C] group-hover:text-white group-hover:border-[#9F1D2C] transition-all">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3 className="font-poppins text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  <div className="space-y-1 text-sm font-red-hat text-[#9aacc6] leading-relaxed">
                    {card.lines.map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </div>
                </div>

                {card.href && (
                  <div className="pt-6 mt-6 border-t border-[#1f293d]">
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00e5ff] hover:underline"
                    >
                      <span>Connect Directly</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
