'use client';

import { ArrowRight, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#030712] text-[#f4f7ff] border-t border-[#1f293d] font-sans">
      <div className="max-w-[1340px] mx-auto px-5 sm:px-12 lg:px-16 pt-16 pb-12">

        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1f293d]">

          {/* Column 1: Brand Info & Tagline (3.5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center mb-5">
                <Image
                  src="/images/logo.png"
                  alt="Linkay Ventures"
                  width={245}
                  height={95}
                  className="w-[215px] sm:w-[245px] h-auto"
                  priority
                />
              </Link>

              {/* Required Approved Tagline */}
              <p className="font-mono text-xs font-bold text-[#8c1627] tracking-wider uppercase mb-2">
                INVEST · INNOVATE · TRANSFORM
              </p>

              <p className="font-red-hat text-[#9aacc6] text-[13.5px] leading-relaxed max-w-[320px] mb-6 font-normal">
                Investment, advisory and emerging financial infrastructure for a more connected economy.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/linkay-ventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#080d1a] border border-[#233049] flex items-center justify-center text-[#9aacc6] hover:text-[#8c1627] hover:border-[#8c1627]/50 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-[#080d1a] border border-[#233049] flex items-center justify-center text-[#9aacc6] hover:text-[#8c1627] hover:border-[#8c1627]/50 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#080d1a] border border-[#233049] flex items-center justify-center text-[#9aacc6] hover:text-[#8c1627] hover:border-[#8c1627]/50 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://linkayventures.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="w-8 h-8 rounded-full bg-[#080d1a] border border-[#233049] flex items-center justify-center text-[#9aacc6] hover:text-[#8c1627] hover:border-[#8c1627]/50 transition-colors"
              >
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: COMPANY (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins text-white text-xs font-bold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 font-red-hat text-[13.5px]">
              <li>
                <Link href="/about" className="text-[#9aacc6] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#9aacc6] hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="https://hub.linkayventures.com/index.php" className="text-[#9aacc6] hover:text-[#8c1627] transition-colors"
                >
                  Venture HUB
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-[#9aacc6] hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#9aacc6] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PLATFORM (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-poppins text-white text-xs font-bold uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 font-red-hat text-[13.5px]">
              <li>
                <Link href="/services" className="text-[#9aacc6] hover:text-white transition-colors">
                  Services &amp; Investment
                </Link>
              </li>
              <li>
                <Link href="/rwa-tokenization" className="text-[#9aacc6] hover:text-white transition-colors">
                  RWA Tokenization
                </Link>
              </li>
              <li>
                <Link href="/linkay-commodities" className="text-[#9aacc6] hover:text-white transition-colors">
                  Linkay Commodities
                </Link>
              </li>
              <li>
                <Link href="/linkay-think-tank" className="text-[#9aacc6] hover:text-white transition-colors">
                  Linkay Think-Tank
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ADVISORY DESK & CONTACT (3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-2xl bg-[#080d1a] border border-[#1f293d] shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8c1627] font-semibold block mb-2">
                  Advisory Desk
                </span>
                <p className="font-red-hat text-xs text-[#9aacc6] leading-relaxed mb-4 font-normal">
                  Talk to our team about your venture or asset.
                </p>
                <div className="space-y-1.5 text-xs font-mono text-[#cad8e9] mb-4">
                  <p>Phone: +1 917 816 8128</p>
                  <p>WhatsApp: +1 646 945 7720</p>
                  <p className="text-[#71829e]">Hours: 9:00 AM – 6:00 PM ET</p>
                </div>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-xs font-semibold py-3 px-4 rounded-full transition-all shadow-md shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Paragraph as requested */}
        <div className="py-8 border-b border-[#1f293d]">
          <p className="text-xs font-red-hat text-[#71829e] leading-relaxed">
            <strong className="text-[#9aacc6]">Disclaimer: </strong>
            The information provided on this website is for informational purposes only and does not
            constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any
            security, fund, or tokenization service. Past performance is no guarantee of future
            results. Any investment or tokenization involves substantial risk, including the loss of
            principal.
          </p>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71829e] text-center sm:text-left">
          <div>
            <span>© 2026 Linkay Ventures Inc. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
