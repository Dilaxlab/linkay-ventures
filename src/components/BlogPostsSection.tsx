'use client';

import { useState } from 'react';
import { ArrowUpRight, Calendar, Clock, User, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  href: string;
}

const allPosts: BlogPost[] = [
  {
    id: 'growth-capital',
    title: 'What Founders Should Know Before Raising Growth Capital',
    category: 'Venture & Capital',
    author: 'Linkay Editorial',
    date: 'Oct 2026',
    readTime: '6 min read',
    excerpt:
      'Key considerations on valuation discipline, governance alignment, equity dilution, and selecting long-term value creation partners over fast speculative capital.',
    image: '/images/Investment-Solutions.jpg',
    href: '/contact?subject=Growth%20Capital%20Inquiry',
  },
  {
    id: 'rwa-explained',
    title: "Real-World Assets, Explained: What Tokenization Is (and Isn't)",
    category: 'RWA Tokenization',
    author: 'Linkay Editorial',
    date: 'Oct 2026',
    readTime: '8 min read',
    excerpt:
      'Cutting through market hype to understand how compliant digital securities, regulatory frameworks, and secondary on-chain liquidity actually function for tangible assets.',
    image: '/images/rwa-pipeline-monetization.jpg',
    href: '/contact?subject=RWA%20Tokenization%20Inquiry',
  },
  {
    id: 'asset-documentation',
    title: 'Why Asset Documentation Matters Before Any Tokenization Discussion',
    category: 'Digital Assets',
    author: 'Linkay Editorial',
    date: 'Sep 2026',
    readTime: '5 min read',
    excerpt:
      'Smart contracts cannot cure defective title. Why legal jurisdiction, bankruptcy remoteness, SPV structuring, and audit trails must precede token issuance.',
    image: '/images/rwa-digital-ecosystem.jpg',
    href: '/contact?subject=Asset%20Documentation%20Inquiry',
  },
  {
    id: 'corporate-co-creation',
    title: 'How Corporates and Startups Co-Create: Lessons from Innovation Partnerships',
    category: 'Founder Insights',
    author: 'Linkay Editorial',
    date: 'Sep 2026',
    readTime: '7 min read',
    excerpt:
      'Navigating corporate-startup alliances, pilot commercialization, unit economics, and avoiding common structural pitfalls in enterprise joint development.',
    image: '/images/Innovation-Blueprint-6-Foundational-Elements-Of-An-Innovation-Ecosystem.jpg',
    href: '/contact?subject=Corporate%20Co-Creation%20Inquiry',
  },
  {
    id: 'impact-investing',
    title: 'Impact Investing: Moving Beyond the Buzzword',
    category: 'Venture & Capital',
    author: 'Linkay Editorial',
    date: 'Aug 2026',
    readTime: '5 min read',
    excerpt:
      'Moving beyond marketing rhetoric to explore how patient operator capital, verifiable ESG metrics, and commercial sustainability create enduring enterprise value.',
    image: '/images/1707910811977.png',
    href: '/contact?subject=Impact%20Investing%20Inquiry',
  },
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI in Regulated Markets: Moving from Prototype to Scale',
    category: 'AI & Technology',
    author: 'Linkay Editorial',
    date: 'Aug 2026',
    readTime: '6 min read',
    excerpt:
      'Practical operational frameworks for deploying proprietary intelligence models and revenue architectures within high-compliance financial infrastructure.',
    image: '/images/features-ideation.jpg',
    href: '/contact?subject=Enterprise%20AI%20Inquiry',
  },
];

const categories = [
  'All',
  'Venture & Capital',
  'Digital Assets',
  'RWA Tokenization',
  'AI & Technology',
  'Founder Insights',
];

export default function BlogPostsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPosts =
    activeCategory === 'All'
      ? allPosts
      : allPosts.filter((post) => post.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="posts" className="w-full py-14 sm:py-20 px-4 sm:px-12 lg:px-16 max-w-[1340px] mx-auto border-b border-[#C5CDD7]">
      {/* Category Filter Pills (swipeable on mobile, wrapping on sm+) */}
      <div className="flex items-center gap-2 sm:gap-2.5 mb-10 sm:mb-14 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-[#A12B3C] text-white shadow-lg shadow-[#A12B3C]/30 scale-[1.02]'
                  : 'bg-[#DDE2E8] border border-[#C5CDD7] text-[#A12B3C] hover:bg-[#A12B3C] hover:text-white hover:border-[#A12B3C]'
              }`}
              style={!isActive ? { color: '#A12B3C' } : undefined}
            >
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-[#004a80] rounded-3xl overflow-hidden border-2 border-[#003860] hover:border-white/30 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 text-white"
          >
            <div>
              {/* Cover Image */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div
                  className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A12B3C] border border-[#A12B3C] shadow-md text-white text-[11px] font-mono font-bold uppercase tracking-wider"
                  style={{ backgroundColor: '#A12B3C', color: '#ffffff' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span style={{ color: '#ffffff' }}>{post.category}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-3 text-xs font-mono text-[#cad8e9] uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} className="text-[#ffccd3]" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} className="text-[#ffccd3]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-poppins text-white text-lg sm:text-xl font-bold leading-snug mb-3 group-hover:text-[#ffccd3] transition-colors">
                  {post.title}
                </h3>

                <p className="font-red-hat text-[#cad8e9] text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-white/15 flex items-center justify-between">
              <Link
                href={post.href}
                className="inline-flex items-center gap-1.5 font-poppins text-xs sm:text-sm font-semibold text-white group-hover:text-[#ffccd3] transition-colors"
              >
                <span>Discuss with Team</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#cad8e9]">
                <User size={11} className="text-[#cad8e9]" />
                <span>{post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      
    </section>
  );
}
