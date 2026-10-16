'use client';

import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
  submenu?: { name: string; href: string; external?: boolean; desc?: string }[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Programs', href: '/programs' },
  { name: 'RWA Tokenization', href: '/rwa-tokenization' },
  {
    name: 'More',
    href: '#',
    submenu: [
      { name: 'Blog', href: '/blog', desc: 'Insights, market updates and research.' },
      {
        name: 'Linkay Commodities',
        href: '/linkay-commodities',
        desc: 'Real-world physical commodities trading.',
      },
      {
        name: 'Linkay Think-Tank',
        href: '/linkay-think-tank',
        desc: 'Strategic advisory and emerging tech studies.',
      },
      { name: 'Contact', href: '/contact', desc: 'Connect with our leadership team.' },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#DDE2E8]/95 backdrop-blur-md border-b border-[#C5CDD7] shadow-sm shadow-[#004a80]/5'
          : 'bg-[#DDE2E8]/75 backdrop-blur-md border-b border-[#C5CDD7]/40'
      }`}
    >
      {/* Top brand strip: #004a80 */}
      <div className="h-[2.5px] w-full bg-[#004a80]" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] sm:h-[84px] lg:h-[88px] flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center group py-1">
            <div className="relative w-[180px] sm:w-[220px] lg:w-[250px] xl:w-[260px] h-[58px] sm:h-[70px] lg:h-[78px] xl:h-[82px] transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Linkay Ventures"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 xl:space-x-1.5">
          {navItems.map((item) => {
            if (item.submenu) {
              const isChildActive = item.submenu.some(
                (sub) => !sub.external && pathname.startsWith(sub.href)
              );

              return (
                <div
                  key={item.name}
                  className="relative group py-6"
                  onMouseEnter={() => setMoreDropdownOpen(true)}
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 font-poppins text-[13.5px] font-semibold tracking-[0.2px] px-3.5 py-2 rounded-xl transition-all duration-200 ${
                      isChildActive || moreDropdownOpen
                        ? 'text-[#004a80] bg-[#004a80]/5 font-bold'
                        : 'text-[#004a80] hover:text-[#004a80] hover:bg-[#004a80]/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        moreDropdownOpen ? 'rotate-180 text-[#004a80]' : 'text-[#004a80]'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu matching full page background */}
                  <div
                    className={`absolute right-0 top-[65px] w-[300px] bg-[#DDE2E8] border border-[#C5CDD7] rounded-2xl p-2 shadow-2xl shadow-[#004a80]/15 transition-all duration-200 z-50 backdrop-blur-md ${
                      moreDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-1">
                      {item.submenu.map((subItem) => {
                        const isCurrent = !subItem.external && pathname.startsWith(subItem.href);
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.external ? '_blank' : undefined}
                            rel={subItem.external ? 'noopener noreferrer' : undefined}
                            className={`group flex items-start justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                              isCurrent
                                ? 'bg-white/80 border-l-2 border-[#A12B3C] shadow-sm'
                                : 'hover:bg-white/70 hover:shadow-sm'
                            }`}
                          >
                            <div className="flex flex-col flex-1 pr-2">
                              <span
                                className={`font-poppins text-[13.5px] font-bold transition-colors ${
                                  isCurrent ? 'text-[#A12B3C]' : 'text-[#004a80] group-hover:text-[#A12B3C]'
                                }`}
                              >
                                {subItem.name}
                              </span>
                              {subItem.desc && (
                                <span className="text-[12px] font-red-hat text-[#556880] group-hover:text-[#004a80] line-clamp-1 mt-0.5 font-normal transition-colors">
                                  {subItem.desc}
                                </span>
                              )}
                            </div>
                            <ArrowRight
                              size={15}
                              className={`shrink-0 mt-1 transition-all duration-200 ${
                                isCurrent
                                  ? 'text-[#A12B3C] translate-x-0 opacity-100'
                                  : 'text-[#004a80]/30 group-hover:text-[#A12B3C] group-hover:translate-x-0.5'
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-1.5 font-poppins text-[13.5px] font-semibold tracking-[0.2px] px-3.5 py-2 rounded-xl transition-all duration-200 ${
                  active
                    ? 'text-[#004a80] font-bold'
                    : 'text-[#004a80] hover:text-[#004a80] hover:bg-[#004a80]/5'
                }`}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[9.5px] font-bold uppercase tracking-wider bg-[#A12B3C] text-white px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#004a80] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions: Venture HUB (#004a80) + Get In Touch (#A12B3C) */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            href="https://hub.linkayventures.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-transparent hover:bg-[#004a80] text-[#004a80] hover:text-white border-2 border-[#004a80] font-poppins text-[13px] font-bold px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md hover:shadow-[#004a80]/20"
          >
            <span>Venture HUB</span>
            <ArrowUpRight size={14} className="text-[#A12B3C] group-hover:text-white transition-colors" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-[13.5px] font-bold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#A12B3C]/30 hover:shadow-lg hover:shadow-[#A12B3C]/40 hover:-translate-y-0.5"
          >
            <span>Get In Touch</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#004a80] p-2.5 rounded-xl hover:bg-[#A12B3C]/10 hover:text-[#A12B3C] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-page-gradient border-t border-[#C5CDD7] px-5 pt-3 pb-8 shadow-2xl animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="py-2.5 border-b border-[#C5CDD7]/70">
                    <div className="font-poppins text-[12px] font-bold uppercase tracking-wider text-[#004a80] px-3 py-1 flex items-center justify-between">
                      <span>{item.name}</span>
                      <ChevronDown size={14} className="text-[#A12B3C]" />
                    </div>
                    <div className="pl-3 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-[14px] font-poppins font-semibold text-[#004a80] hover:text-[#A12B3C] hover:bg-[#cad2dc] rounded-xl transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-poppins text-[14px] font-semibold transition-colors ${
                    active
                      ? 'text-[#A12B3C] bg-[#cad2dc] border-l-4 border-[#A12B3C]'
                      : 'text-[#004a80] hover:text-[#A12B3C] hover:bg-[#cad2dc]'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#A12B3C] text-white px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#D8D5B0] space-y-2.5">
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border-2 border-[#004a80] bg-transparent text-[#004a80] hover:bg-[#004a80] hover:text-white font-poppins text-sm font-bold py-3 px-4 rounded-full shadow-sm transition-all"
              >
                <span>Venture HUB</span>
                <ArrowUpRight size={16} className="text-[#A12B3C]" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#A12B3C] hover:bg-[#A12B3C]/90 text-white font-poppins text-sm font-bold py-3 px-4 rounded-full shadow-md shadow-[#A12B3C]/30 transition-all hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
