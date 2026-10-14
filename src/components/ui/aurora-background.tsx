'use client';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          'transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-white text-navy-800',
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              // Futuristic Theme Aurora with Cyan, Blue, Violet and Logo Maroon
              '--aurora':
                'repeating-linear-gradient(100deg,#4ee7ee_10%,#4c8dff_15%,#9F1D2C_20%,#9c78ff_25%,#4ee7ee_30%)',
              '--white-gradient':
                'repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)',
              '--brand-300': '#9c78ff',
              '--brand-400': '#4c8dff',
              '--brand-500': '#4ee7ee',
              '--brand-200': '#9F1D2C',
              '--black': '#000',
              '--white': '#fff',
              '--transparent': 'transparent',
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-40 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--brand-500)_10%,var(--brand-400)_15%,var(--brand-300)_20%,var(--brand-200)_25%,var(--brand-400)_30%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
