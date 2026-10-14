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
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#030712]/95 backdrop-blur-md border-b border-[#1f293d] shadow-lg'
          : 'bg-[#030712] border-b border-[#1f293d]/60'
      }`}
    >
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
                    className={`flex items-center gap-1 font-poppins text-[13.5px] font-medium tracking-[0.2px] px-3.5 py-2 rounded-lg transition-colors ${
                      isChildActive || moreDropdownOpen
                        ? 'text-white bg-[#080d1a] font-semibold text-[#8c1627]'
                        : 'text-[#cad8e9] hover:text-[#8c1627] hover:bg-[#080d1a]/60'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        moreDropdownOpen ? 'rotate-180 text-[#8c1627]' : 'text-[#9aacc6]'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute right-0 top-[65px] w-[260px] bg-[#080d1a] border border-[#1f293d] rounded-2xl p-2 shadow-2xl transition-all duration-200 z-50 ${
                      moreDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        target={subItem.external ? '_blank' : undefined}
                        rel={subItem.external ? 'noopener noreferrer' : undefined}
                        className="group flex flex-col px-3.5 py-2.5 rounded-xl transition-colors hover:bg-[#101a2a]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-poppins text-[13px] font-medium text-white group-hover:text-[#8c1627] transition-colors">
                            {subItem.name}
                          </span>
                          <ArrowRight
                            size={12}
                            className="text-[#9aacc6] group-hover:text-[#8c1627] transition-colors opacity-0 group-hover:opacity-100"
                          />
                        </div>
                        {subItem.desc && (
                          <span className="text-[11px] text-[#9aacc6] line-clamp-1 mt-0.5">
                            {subItem.desc}
                          </span>
                        )}
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
                className={`relative flex items-center gap-1.5 font-poppins text-[13.5px] tracking-[0.2px] px-3.5 py-2 rounded-lg transition-colors ${
                  active
                    ? 'text-white font-semibold bg-[#080d1a] text-[#8c1627]'
                    : 'text-[#cad8e9] hover:text-[#8c1627] hover:bg-[#080d1a]/60 font-medium'
                }`}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[9.5px] font-bold uppercase tracking-wider bg-[#9F1D2C] text-white px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#8c1627] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions: Venture HUB + Get In Touch */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            href="https://hub.linkayventures.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#080d1a] hover:bg-[#101a2a] text-[#f4f7ff] border border-[#233049] hover:border-[#8c1627]/50 font-poppins text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <span>Venture HUB</span>
            <ArrowUpRight size={14} className="text-[#8c1627]" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-[13.5px] font-semibold px-6 py-2.5 rounded-full transition-all shadow-md shadow-[#9F1D2C]/30 hover:-translate-y-0.5"
          >
            <span>Get In Touch</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#f4f7ff] p-2 rounded-lg hover:bg-[#080d1a] hover:text-[#8c1627] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#030712] border-t border-[#1f293d] px-5 pt-3 pb-8 shadow-2xl animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="py-2 border-b border-[#1f293d]">
                    <div className="font-poppins text-[12px] font-semibold uppercase tracking-wider text-[#9aacc6] px-3 py-1">
                      {item.name}
                    </div>
                    <div className="pl-3 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-[14px] font-poppins font-medium text-[#cad8e9] hover:text-[#8c1627] hover:bg-[#080d1a] rounded-lg transition-colors"
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
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-poppins text-[14px] font-medium transition-colors ${
                    active
                      ? 'text-white bg-[#080d1a] font-semibold text-[#8c1627]'
                      : 'text-[#cad8e9] hover:text-[#8c1627] hover:bg-[#080d1a]'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#9F1D2C] text-white px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#1f293d] space-y-2.5">
              <Link
                href="https://hub.linkayventures.com/index.php"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border border-[#233049] bg-[#080d1a] text-[#f4f7ff] font-poppins text-sm font-semibold py-3 px-4 rounded-full shadow transition-all hover:border-[#8c1627]/50"
              >
                <span>Venture HUB</span>
                <ArrowUpRight size={16} className="text-[#8c1627]" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#9F1D2C] hover:bg-[#851823] text-white font-poppins text-sm font-semibold py-3 px-4 rounded-full shadow-lg shadow-[#9F1D2C]/30 transition-all hover:-translate-y-0.5"
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
