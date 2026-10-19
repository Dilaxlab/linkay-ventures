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
import Image from 'next/image';

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
    <main className="w-full bg-page-gradient text-[#004a80] font-sans antialiased overflow-x-hidden selection:bg-[#894541] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <section className="relative w-full min-h-[calc(100vh-88px)] flex items-center justify-center bg-transparent text-[#004a80] border-b border-[#C5CDD7]/80 overflow-hidden">
        {/* ============================================================
      FULL-BLEED BACKGROUND IMAGE WITH ELEGANT LIGHT SHADES
  ============================================================ */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-transparent pointer-events-none">
          <Image
            src="/images/LV4.png"
            alt="Real Assets Token Orbit"
            fill
            priority
            quality={95}
            className="object-cover object-[70%_center] sm:object-[center_55%] lg:object-center"
            sizes="100vw"
          />

          {/* 1. Light top blend shade directly under navbar */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#DDE2E8]/85 via-[#DDE2E8]/30 to-transparent pointer-events-none" />

          {/* 2. Light bottom blend shade into ticker strip */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#DDE2E8] via-[#DDE2E8]/40 to-transparent pointer-events-none" />

          {/* 3. Light left-side shade for desktop text clarity */}
          <div className="hidden sm:block absolute inset-y-0 left-0 w-[60%] lg:w-[50%] bg-gradient-to-r from-[#DDE2E8]/60 via-[#DDE2E8]/20 to-transparent pointer-events-none" />

          {/* 4. Light mobile framing shade so image and text coexist beautifully */}
          <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#DDE2E8]/50 via-transparent to-[#DDE2E8]/60 pointer-events-none" />
        </div>

        {/* Content - Centered */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#894541] uppercase flex items-center gap-2">
                <span>—</span> CONNECT WITH LINKAY VENTURES
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-poppins text-3xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              Start the <span className="text-[#894541] ">conversation.</span>
            </h1>

            {/* Body */}
            <p className="font-red-hat text-[#004a80] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Have an asset to tokenize, a venture ready to scale, or an institutional partnership
              in mind? Our senior leadership is ready to connect.
            </p>

            {/* Features strip */}
            <div className="mt-12 w-full max-w-[860px] border-t border-[#1f293d] pt-8">
              {/* Trust Chips Line */}
              <div className="flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono font-bold text-[#004a80]">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Response Within 24h</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Confidential Under NDA</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#894541] shadow-[0_0_8px_rgba(161,43,60,0.5)]" />
                  <span>Global Advisory Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CONTACT FORM & DIRECT LINE SPLIT                            */}
      {/* ============================================================== */}
      <section
        id="contact-form"
        className="relative w-full py-14 sm:py-24 px-4 sm:px-12 lg:px-16 max-w-[1240px] mx-auto border-b border-[#C5CDD7]"
      >
        <div className="relative max-w-[1180px] mx-auto">
          {/* Subtle outer glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[32px] bg-gradient-to-r from-[#894541]/15 via-[#894541]/10 to-[#894541]/15 blur-2xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-[28px] border-2 border-[#003860] bg-[#004a80] shadow-2xl">
            {/* LEFT PANEL — Dark Direct Line (5 cols) */}
            <div className="lg:col-span-5 bg-[#003860] p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between relative overflow-hidden text-white">
              <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#894541]/15 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#894541]/10 blur-3xl" />

              <div className="relative z-10">
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2 mb-6">
                  <span>—</span> DIRECT ADVISORY LINE
                </span>

                <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Talk to a partner, <span className="text-[#ffccd3]">not a bot.</span>
                </h3>

                <p className="font-red-hat text-[#cad8e9] text-sm sm:text-base leading-relaxed mb-8">
                  Every inquiry reaches a senior team member directly. We assess structural
                  feasibility, venture alignment, and capital requirements under strict
                  confidentiality.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center shrink-0">
                      <MapPin size={19} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#ffccd3] uppercase tracking-wider block">
                        Office
                      </span>
                      <p className="text-white text-sm font-poppins font-medium mt-0.5 leading-snug">
                        295 Madison Avenue, 12th Flr
                        <br />
                        New York, NY 10017
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center shrink-0">
                      <Mail size={19} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#ffccd3] uppercase tracking-wider block">
                        Email
                      </span>
                      <a
                        href="mailto:info@linkayventures.com"
                        className="text-white hover:text-[#ffccd3] text-sm font-poppins font-medium mt-0.5 block transition-colors"
                      >
                        info@linkayventures.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center shrink-0">
                      <Phone size={19} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#ffccd3] uppercase tracking-wider block">
                        Phone &amp; WhatsApp
                      </span>
                      <a
                        href="tel:+19178168128"
                        className="text-white hover:text-[#ffccd3] text-sm font-poppins font-medium mt-0.5 block transition-colors"
                      >
                        +1 917 816 8128 (Phone)
                      </a>
                      <span className="text-[#cad8e9] text-xs font-mono block mt-0.5">
                        WhatsApp: +1 646 945 7720
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/15 relative z-10 flex items-center gap-2 text-xs font-mono text-[#cad8e9]">
                <Clock size={13} className="text-[#ffccd3]" />
                <span>Hours: 9:00 AM – 6:00 PM ET</span>
              </div>
            </div>

            {/* RIGHT PANEL — Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-[#004a80] text-white">
              {submitted ? (
                <div className="flex h-full min-h-[440px] flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 text-white flex items-center justify-center mb-6 shadow-xl">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-poppins text-white text-2xl font-bold mb-3">
                    Message Received
                  </h3>
                  <p className="font-red-hat text-[#cad8e9] text-base leading-relaxed max-w-md mb-8">
                    Thank you for reaching out. A partner from our New York desk will review your
                    inquiry and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-7 py-3 rounded-full bg-[#DDE2E8] hover:bg-[#cad2dc] text-[#004a80] border-2 border-[#DDE2E8] text-xs font-mono uppercase tracking-wider transition-all font-bold"
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
                    <p className="font-red-hat text-xs sm:text-sm text-[#cad8e9]">
                      Provide a brief overview of your enterprise or asset structure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#003860] border border-[#005fa3] text-white text-sm placeholder-[#cad8e9]/60 focus:border-[#ffccd3] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#003860] border border-[#005fa3] text-white text-sm placeholder-[#cad8e9]/60 focus:border-[#ffccd3] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#003860] border border-[#005fa3] text-white text-sm placeholder-[#cad8e9]/60 focus:border-[#ffccd3] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                        Practice Area
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#003860] border border-[#005fa3] text-white text-sm focus:border-[#ffccd3] focus:outline-none transition-colors"
                      >
                        <option value="Venture & Growth Capital">Venture & Growth Capital</option>
                        <option value="Strategic Advisory & M&A">Strategic Advisory & M&A</option>
                        <option value="RWA Tokenization">RWA Tokenization</option>
                        <option value="Venture Accelerator Programs">
                          Venture Accelerator Programs
                        </option>
                        <option value="Corporate Partnerships">Corporate Partnerships</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your venture, asset, or collaboration goals..."
                      className="w-full px-4 py-3 rounded-xl bg-[#003860] border border-[#005fa3] text-white text-sm placeholder-[#cad8e9]/60 focus:border-[#ffccd3] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#DDE2E8] bg-[#DDE2E8] px-8 py-4 font-poppins text-sm font-bold uppercase tracking-wider !text-[#004a80] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#004a80] hover:bg-[#004a80] hover:!text-white hover:shadow-[#004a80]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#894541] focus-visible:ring-offset-2 focus-visible:ring-offset-[#004a80] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="!text-[#004a80] transition-colors duration-300 group-hover:!text-white">
                      Submit Inquiry
                    </span>

                    <Send
                      size={16}
                      className="shrink-0 text-[#004a80] transition-colors duration-300 group-hover:text-white"
                      aria-hidden="true"
                    />
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
      <section
        className="w-full py-14 sm:py-24 px-5 sm:px-12 lg:px-16 max-w-[1240px] mx-auto"
        id="office-info"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#004a80] border-2 border-[#003860] hover:border-white/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 text-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="px-3 py-1 rounded-full bg-[#DDE2E8] border border-[#C5CDD7] text-[#01497f] font-bold text-[11px] font-mono uppercase tracking-widest shadow-sm"
                      style={{ color: '#01497f' }}
                    >
                      {card.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3 className="font-poppins text-xl font-bold text-white mb-3 group-hover:text-[#ffccd3] transition-colors">
                    {card.title}
                  </h3>

                  <div className="space-y-1 text-sm font-red-hat text-[#cad8e9] leading-relaxed">
                    {card.lines.map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </div>
                </div>

                {card.href && (
                  <div className="pt-6 mt-6 border-t border-white/15">
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffccd3] hover:text-white transition-colors"
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
