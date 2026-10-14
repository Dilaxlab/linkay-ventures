import type { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import EcosystemStrip from '@/components/EcosystemStrip';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import DigitalAssetSection from '@/components/DigitalAssetSection';
import InvestmentThemesSection from '@/components/InvestmentThemesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import VentureHubSection from '@/components/VentureHubSection';
import LeadershipSection from '@/components/LeadershipSection';
import ClosingCtaSection from '@/components/ClosingCtaSection';
import NewsletterSection from '@/components/NewsletterSection';

export const metadata: Metadata = {
  title: 'Linkay Ventures | Investment, Advisory and Digital Assets, New York',
  description:
    "Capital for what's next. Linkay Ventures connects ambitious ventures and real-world assets with investment, advisory and RWA tokenization strategies.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#030712]">
      {/* 1. Hero: Capital for what's next + Full-bleed image background + 2 CTAs + 3 Chips */}
      <HeroSlider />


      {/* 3. 01 / Our Platform: One vision. Connected capabilities */}
      <WhatWeDoSection />

      {/* 4. 02 / Digital Asset Infrastructure: Bridging Real-World Value with Programmable Finance */}
      <DigitalAssetSection />

      {/* 5. 03 / Investment Themes: Focus Areas Driving the Future of Capital */}
      <InvestmentThemesSection />

      {/* 6. 04 / How We Work: Disciplined execution from concept to scale */}
      <HowWeWorkSection />

      {/* 7. Venture HUB Portal Block (Between How We Work and Leadership) */}
      <VentureHubSection />

      {/* 10. Newsletter Strip: Stay informed on markets, funds and digital asset insights */}
      <NewsletterSection />
    </div>
  );
}
