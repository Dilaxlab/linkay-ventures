'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Kay Satha',
      title: 'Founder & Managing Partner',
      bio: 'Serial entrepreneur and venture builder with deep expertise across capital formation, private equity, and emerging digital financial infrastructure.',
      avatar: '/images/about.jpeg',
      linkedin: 'https://www.linkedin.com/company/linkay-ventures',
    },
    {
      name: 'Lincoln T. Satkunarajah',
      title: 'Senior Strategic Advisor',
      bio: 'Decades of executive experience in engineering, cross-border infrastructure, international market expansion, and institutional investment strategy.',
      avatar: '/images/about.jpeg',
      linkedin: 'https://www.linkedin.com/company/linkay-ventures',
    },
  ];

  return (
    <section className="w-full bg-[#050814] py-14 sm:py-20 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]" id="leadership">
      <div className="max-w-[1340px] mx-auto relative z-10">

        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
            <span>—</span> 05 / LEADERSHIP
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-poppins text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-tight mb-12">
          Experience meets{' '}
          <span className="text-[#8c1627] drop-shadow-[0_0_20px_rgba(140,22,39,0.3)]">
            ambition.
          </span>
        </h2>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-9 rounded-2xl bg-[#080d1a] border border-[#1f293d] hover:border-[#8c1627]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  {/* Real Photo */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#1f293d] bg-[#030712] shrink-0 group-hover:border-[#8c1627]/50 transition-colors">
                    <Image
                      src={leader.avatar}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white group-hover:text-[#8c1627] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="font-mono text-xs text-[#8c1627] mt-1 uppercase tracking-wider">
                      {leader.title}
                    </p>
                  </div>
                </div>

                {/* 2-line Bio */}
                <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {leader.bio}
                </p>
              </div>

              {/* LinkedIn Action Link */}
              <div className="pt-4 border-t border-[#1f293d] flex items-center justify-between">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#cad8e9] hover:text-[#8c1627] transition-colors group/link"
                >
                  <span>View LinkedIn Profile</span>
                  <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-[11px] font-mono text-[#71829e] px-2.5 py-0.5 rounded-full bg-[#030712] border border-[#1f293d]">
                  Executive Team
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
