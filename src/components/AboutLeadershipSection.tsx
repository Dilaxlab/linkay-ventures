'use client';

import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Award } from 'lucide-react';
import Image from 'next/image';

interface Leader {
  id: string;
  role: string;
  name: string;
  shortBio: string;
  credentials?: string[];
  fullBio: string[];
  avatar: string;
  linkedin: string;
}

const leadersData: Leader[] = [
  {
    id: 'kay-satha',
    role: 'FOUNDER',
    name: 'Kay Satha',
    shortBio:
      'Entrepreneurship, investment strategy, venture building and the commercialization of emerging technologies.',
    fullBio: [
      "Kay Satha is the visionary founder of Linkay Ventures, leading the firm's mission to empower startups and accelerate innovation across emerging industries. With nearly three decades of experience in entrepreneurship, investment strategy, and venture building across the United States and Canada, she has guided numerous companies from concept to market leadership.",
      'Her expertise lies in identifying scalable opportunities, aligning capital with strategy, and transforming early-stage ideas into sustainable, high-growth businesses. Through disciplined execution and impact-driven investment, Kay has positioned Linkay Ventures as a trusted partner for founders seeking long-term value creation rather than short-term gains.',
      'Kay is actively engaged in applying tokenization strategies that transform AI-driven assets, proprietary platforms, and digital innovations into structured, blockchain-backed instruments with tangible commercial value. Her work focuses on making emerging technologies investable by designing monetization pathways that align with user needs, investor expectations, and global market standards. By integrating ethical AI principles with practical revenue frameworks, she helps startups and technology ventures progress from proof-of-concept to commercially scalable, investor-ready products.',
      'Kay maintains strong relationships with a global network of decision-makers and investors, playing an active role in capital raising, investment structuring, and strategic business development. Her work spans infrastructure, technology, fintech, and energy sectors.',
    ],
    avatar: '/images/about.jpeg',
    linkedin: 'https://www.linkedin.com/company/linkay-ventures',
  },
  {
    id: 'lincoln-satkunarajah',
    role: 'ADVISOR',
    name: 'Lincoln T. Satkunarajah',
    credentials: [
      'BSc. (Eng.) U.K., MSc. (Eng.), U.K.',
      'P.E, P.T.O.E (USA), PEng. IntPE. (Canada), MITE (USA), MIHT (UK)',
      'President and CEO, Chair Advisory Board, International Professional Engineer, Entrepreneur, Inventor & Investor',
    ],
    shortBio:
      'Engineering, infrastructure, technology, investment strategy and international innovation initiatives.',
    fullBio: [
      "As a seasoned advisor at Linkay Ventures, Lincoln brings a wealth of industry knowledge and strategic insights to the team. With a proven track record in venture capital, corporate innovation, and scaling startups, Lincoln plays a pivotal role in shaping Linkay Ventures' strategic direction. His expertise in identifying high-potential opportunities and fostering meaningful partnerships ensures startups in the Linkay portfolio receive unparalleled guidance and support.",
    ],
    avatar: '/images/about.jpeg',
    linkedin: 'https://www.linkedin.com/company/linkay-ventures',
  },
];

export default function AboutLeadershipSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#030712] py-20 px-6 sm:px-12 lg:px-16 border-b border-[#1f293d]" id="team">
      <div className="max-w-[1340px] mx-auto">

        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#9F1D2C] uppercase flex items-center gap-2">
            <span>—</span> LEADERSHIP TEAM
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-poppins text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-tight mb-12">
          Experience meets{' '}
          <span className="text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            ambition.
          </span>
        </h2>

        {/* 2 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {leadersData.map((leader) => {
            const isExpanded = expandedId === leader.id;

            return (
              <div
                key={leader.id}
                className={`p-7 sm:p-9 rounded-2xl bg-[#080d1a] border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                  isExpanded ? 'border-[#00e5ff]/50 bg-[#0a1122]' : 'border-[#1f293d] hover:border-[#1f293d]/80'
                }`}
              >
                <div>
                  {/* Header Row: Photo + Name + Role */}
                  <div className="flex items-center gap-4 sm:gap-5 mb-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#1f293d] bg-[#030712] shrink-0">
                      <Image
                        src={leader.avatar}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-mono font-semibold tracking-widest text-[#00e5ff] uppercase block mb-1">
                        {leader.role}
                      </span>
                      <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-white">
                        {leader.name}
                      </h3>
                    </div>
                  </div>

                  {/* Short Summary (Default view) */}
                  <p className="font-red-hat text-[#9aacc6] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {leader.shortBio}
                  </p>

                  {/* Full Details & Credentials (ONLY when Read More is clicked) */}
                  {isExpanded && (
                    <div className="space-y-4 font-red-hat text-[#cad5e8] text-sm sm:text-[15px] leading-relaxed mb-6 font-normal pt-4 border-t border-[#1f293d]/80 animate-in fade-in duration-300">
                      {/* Credentials & Distinctions (Lincoln) */}
                      {leader.credentials && leader.credentials.length > 0 && (
                        <div className="p-4 rounded-xl bg-[#030712] border border-[#1f293d] space-y-2">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00e5ff] mb-1">
                            <Award size={13} />
                            <span>Credentials &amp; Distinctions</span>
                          </div>
                          {leader.credentials.map((cred, cIdx) => (
                            <p key={cIdx} className="text-xs font-mono text-[#cad5e8] leading-relaxed">
                              • {cred}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Bio Paragraphs */}
                      {leader.fullBio.map((paragraph, pIdx) => (
                        <p key={pIdx}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-[#1f293d] flex items-center justify-between gap-4">
                  {/* Read More / Show Less Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(leader.id)}
                    className="inline-flex items-center gap-2 bg-[#101a2a] hover:bg-[#18263e] text-white border border-[#233049] hover:border-[#00e5ff]/50 font-poppins text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-sm group"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                    {isExpanded ? (
                      <ChevronUp size={14} className="text-[#00e5ff] transition-transform group-hover:-translate-y-0.5" />
                    ) : (
                      <ChevronDown size={14} className="text-[#00e5ff] transition-transform group-hover:translate-y-0.5" />
                    )}
                  </button>

                 
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
