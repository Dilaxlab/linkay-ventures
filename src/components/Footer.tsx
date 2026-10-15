'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-page-gradient text-[#f4f7ff] border-t border-[#1f293d]/30 font-sans">
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
              <p className="font-mono text-xs font-bold text-[#A12B3C] tracking-wider uppercase mb-2">
                INVEST · INNOVATE · TRANSFORM
              </p>

              <p className="font-red-hat text-[#004a80] text-[13.5px] leading-relaxed max-w-[320px] mb-6 font-normal">
                Investment, advisory and emerging financial infrastructure for a more connected economy.
              </p>
            </div>
          </div>

          {/* Column 2: COMPANY (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins text-[#004a80] text-xs font-bold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 font-red-hat text-[13.5px]">
              <li>
                <Link href="/about" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="https://hub.linkayventures.com/index.php" className="text-[#004a80] hover:text-[#A12B3C] transition-colors"
                >
                  Venture HUB
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PLATFORM (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-poppins text-[#004a80] text-xs font-bold uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 font-red-hat text-[13.5px]">
              <li>
                <Link href="/services" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  Services &amp; Investment
                </Link>
              </li>
              <li>
                <Link href="/rwa-tokenization" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  RWA Tokenization
                </Link>
              </li>
              <li>
                <Link href="/linkay-commodities" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  Linkay Commodities
                </Link>
              </li>
              <li>
                <Link href="/linkay-think-tank" className="text-[#004a80] hover:text-[#A12B3C] transition-colors">
                  Linkay Think-Tank
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ADVISORY DESK & CONTACT (3 cols) */}
          <div className="lg:col-span-3">
            <div
              className="p-6 rounded-3xl border-2 border-[#003860] shadow-xl flex flex-col justify-between h-full text-white"
              style={{ backgroundColor: '#004a80' }}
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#ffccd3] font-bold block mb-2">
                  Advisory Desk
                </span>
                <p className="font-red-hat text-xs text-[#cad8e9] leading-relaxed mb-4 font-normal">
                  Talk to our team about your venture or asset.
                </p>
                <div className="space-y-1.5 text-xs font-mono text-[#cad8e9] mb-4">
                  <p>Phone: +1 917 816 8128</p>
                  <p>WhatsApp: +1 646 945 7720</p>
                  <p className="text-[#8da5c4]">Hours: 9:00 AM – 6:00 PM ET</p>
                </div>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-xs font-bold py-3 px-4 rounded-full transition-all shadow-md shadow-[#A12B3C]/40 hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Paragraph as requested */}
        <div className="py-8 border-b border-[#004a80]/20">
          <p className="text-xs font-red-hat text-[#004a80]/80 leading-relaxed">
            <strong className="text-[#004a80]">Disclaimer: </strong>
            The information provided on this website is for informational purposes only and does not
            constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any
            security, fund, or tokenization service. Past performance is no guarantee of future
            results. Any investment or tokenization involves substantial risk, including the loss of
            principal.
          </p>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#004a80] text-center sm:text-left">
          <div>
            <span>© 2026 Linkay Ventures Inc. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-[#004a80] transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#004a80] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#004a80] transition-colors">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
