'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
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
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  return (
    <section
      id="posts"
      className="mx-auto w-full max-w-[1340px] border-b border-[#C5CDD7] px-4 py-14 sm:px-12 sm:py-20 lg:px-16"
    >
      {/* Category Filters */}
      <div className="no-scrollbar -mx-4 mb-10 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-14 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={isActive}
              className={`group/filter inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 px-4 py-2.5 font-poppins text-xs font-semibold uppercase tracking-wider shadow-md transition-all duration-200 hover:-translate-y-0.5 sm:px-5 ${
                isActive
                  ? 'border-[#004a80] bg-[#004a80] !text-white shadow-[#894541]/20'
                  : 'border-[#004a80] bg-[#DDE2E8] !text-[#004a80] hover:border-[#004a80] hover:bg-[#004a80] hover:!text-white'
              }`}
            >
              {isActive && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />}

              <span
                className={
                  isActive ? '!text-white' : '!text-[#004a80] group-hover/filter:!text-white'
                }
              >
                {cat}
              </span>
            </button>
          );
        })}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#003860] bg-[#004a80] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#004a80]/20"
          >
            {/* Cover Image */}
            <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Category Badge */}
              <div className="absolute left-3.5 top-3.5 inline-flex max-w-[calc(100%-28px)] items-center gap-1.5 rounded-full border border-[#004a80] bg-[#004a80] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider !text-white shadow-md">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                <span className="!text-white">{post.category}</span>
              </div>
            </div>

            {/* Post Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              {/* Date and Read Time */}
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider !text-[#cad8e9]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} className="shrink-0 text-[#ffccd3]" />
                  <span className="!text-[#cad8e9]">{post.date}</span>
                </span>

                <span className="h-1 w-1 rounded-full bg-white/30" />

                <span className="inline-flex items-center gap-1.5">
                  <Clock size={12} className="shrink-0 text-[#ffccd3]" />
                  <span className="!text-[#cad8e9]">{post.readTime}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-poppins text-lg font-bold leading-snug !text-white transition-colors duration-200 group-hover:!text-[#ffccd3] sm:text-xl">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-6 line-clamp-3 font-red-hat text-xs leading-relaxed !text-[#cad8e9] sm:text-sm">
                {post.excerpt}
              </p>

              {/* Action Bar */}
              <div className="mt-auto flex flex-col items-start gap-4 border-t border-white/15 pt-5">
                <Link
                  href={post.href}
                  className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#004a80] bg-[#DDE2E8] px-5 py-3 font-poppins text-sm font-bold !text-[#004a80] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004a80] hover:!text-white sm:w-auto"
                >
                  <span className="!text-[#004a80] group-hover/button:!text-white">
                    Discuss with Team
                  </span>

                  <ArrowRight
                    size={16}
                    className="shrink-0 !text-[#004a80] transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:!text-white"
                  />
                </Link>

                {/* Author */}
                <div className="inline-flex items-center gap-1.5 font-mono text-[11px] !text-[#cad8e9]">
                  <User size={12} className="shrink-0 !text-[#cad8e9]" />
                  <span className="!text-[#cad8e9]">{post.author}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-poppins text-base !text-[#004a80]">No posts found in this category.</p>
        </div>
      )}
    </section>
  );
}
