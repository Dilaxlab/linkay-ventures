'use client';

import { ArrowUpRight } from 'lucide-react';
import LeaderAvatar from '@/components/LeaderAvatar';

export default function LeadershipSection() {
  const leaders: Array<{
    name: string;
    gender: 'female' | 'male';
    title: string;
    bio: string;
    linkedin: string;
  }> = [
    {
      name: 'Kay Satha',
      gender: 'female',
      title: 'Founder & Managing Partner',
      bio: 'Serial entrepreneur and venture builder with deep expertise across capital formation, private equity, and emerging digital financial infrastructure.',
      linkedin: 'https://www.linkedin.com/company/linkay-ventures',
    },
    {
      name: 'Lincoln T. Satkunarajah',
      gender: 'male',
      title: 'Senior Strategic Advisor',
      bio: 'Decades of executive experience in engineering, cross-border infrastructure, international market expansion, and institutional investment strategy.',
      linkedin: 'https://www.linkedin.com/company/linkay-ventures',
    },
  ];

  return (
    <section className="w-full bg-transparent py-14 sm:py-20 px-5 sm:px-12 lg:px-16 text-[#f4f7ff] relative border-b border-[#1f293d]" id="leadership">
      <div className="max-w-[1340px] mx-auto relative z-10">

        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#A12B3C] uppercase flex items-center gap-2">
            <span>—</span> 05 / LEADERSHIP
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-poppins text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#004a80] tracking-tight leading-tight mb-12">
          Experience meets{' '}
          <span className="text-[#A12B3C]">
            ambition.
          </span>
        </h2>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-9 rounded-3xl bg-[#004a80] border-2 border-[#003860] hover:border-white/30 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 text-white"
            >
              <div>
                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  {/* Avatar Icon */}
                  <LeaderAvatar gender={leader.gender} name={leader.name} />

                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white group-hover:text-[#ffccd3] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="font-mono text-xs text-[#ffccd3] mt-1 uppercase tracking-wider font-semibold">
                      {leader.title}
                    </p>
                  </div>
                </div>

                {/* 2-line Bio */}
                <p className="font-red-hat text-[#cad8e9] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {leader.bio}
                </p>
              </div>

              {/* LinkedIn Action Link */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#ffccd3] transition-colors group/link"
                >
                  <span>View LinkedIn Profile</span>
                  <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-[11px] font-mono text-[#cad8e9] px-3 py-1 rounded-full bg-white/10 border border-white/20">
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
