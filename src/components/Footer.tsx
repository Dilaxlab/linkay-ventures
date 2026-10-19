'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-page-gradient border-t border-[#C5CDD7] font-sans text-[#004a80]">
      <div className="mx-auto max-w-[1340px] px-5 pt-12 pb-8 sm:px-12 sm:pt-16 sm:pb-12 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 border-b border-[#C5CDD7] pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col lg:col-span-4">
            <div>
              <Link href="/" className="mb-5 inline-flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Linkay Ventures"
                  width={245}
                  height={95}
                  className="h-auto w-[200px] sm:w-[245px]"
                  priority
                />
              </Link>

              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-[#894541]">
                INVEST · INNOVATE · TRANSFORM
              </p>

              <p className="mb-6 max-w-[320px] font-red-hat text-[13.5px] leading-relaxed text-[#004a80]">
                Investment, advisory and emerging financial infrastructure for a more connected
                economy.
              </p>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 font-poppins text-xs font-bold uppercase tracking-wider text-[#004a80]">
              Company
            </h4>

            <ul className="space-y-2.5 font-red-hat text-[13.5px]">
              <li>
                <Link href="/about" className="transition-colors hover:text-[#894541]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="transition-colors hover:text-[#894541]">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="https://hub.linkayventures.com/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#894541]"
                >
                  Venture HUB
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="transition-colors hover:text-[#894541]">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#894541]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-poppins text-xs font-bold uppercase tracking-wider text-[#004a80]">
              Platform
            </h4>

            <ul className="space-y-2.5 font-red-hat text-[13.5px]">
              <li>
                <Link href="/services" className="transition-colors hover:text-[#894541]">
                  Services &amp; Investment
                </Link>
              </li>
              <li>
                <Link href="/rwa-tokenization" className="transition-colors hover:text-[#894541]">
                  RWA Tokenization
                </Link>
              </li>
              <li>
                <Link href="/linkay-commodities" className="transition-colors hover:text-[#894541]">
                  Linkay Commodities
                </Link>
              </li>
              <li>
                <Link href="/linkay-think-tank" className="transition-colors hover:text-[#894541]">
                  Linkay Think-Tank
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Advisory Desk */}
          <div className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-[#003860] bg-[#004a80] p-6 text-white shadow-xl">
              <div>
                <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-white">
                  Advisory Desk
                </span>

                <p className="mb-4 font-red-hat text-xs leading-relaxed text-[#cad8e9]">
                  Talk to our team about your venture or asset.
                </p>

                <div className="mb-5 space-y-2 break-words font-mono text-xs text-[#cad8e9]">
                  <p>
                    Phone:{' '}
                    <a href="tel:+19178168128" className="transition-colors hover:text-white">
                      +1 917 816 8128
                    </a>
                  </p>

                  <p>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/16469457720"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      +1 646 945 7720
                    </a>
                  </p>

                  <p className="text-[#cad8e9]/80">Hours: 9:00 AM – 6:00 PM ET</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#DDE2E8] bg-[#DDE2E8] px-4 py-3 font-poppins text-xs font-bold uppercase tracking-wider !text-[#004a80] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#004a80] hover:bg-[#004a80] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffccd3]"
              >
                <span className="!text-[#004a80] transition-colors group-hover:!text-white">
                  Contact Us
                </span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-[#004a80] transition-colors group-hover:text-white"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-b border-[#C5CDD7] py-7 sm:py-8">
          <p className="font-red-hat text-xs leading-relaxed text-[#004a80]/80">
            <strong className="text-[#004a80]">Disclaimer: </strong>
            The information provided on this website is for informational purposes only and does not
            constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of
            any security, fund, or tokenization service. Past performance is no guarantee of future
            results. Any investment or tokenization involves substantial risk, including the loss of
            principal.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center font-mono text-xs text-[#004a80] sm:flex-row sm:text-left">
          <div>
            <span>© 2025 Linkay Ventures Inc. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-start">
            <Link href="/terms" className="transition-colors hover:text-[#894541]">
              Terms of Use
            </Link>

            <Link href="/privacy-policy" className="transition-colors hover:text-[#894541]">
              Privacy Policy
            </Link>

            <Link href="/contact" className="transition-colors hover:text-[#894541]">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
