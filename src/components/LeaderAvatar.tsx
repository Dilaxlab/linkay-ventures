'use client';

import React from 'react';

interface LeaderAvatarProps {
  gender: 'female' | 'male';
  name: string;
  className?: string;
}

export default function LeaderAvatar({ gender, name, className = '' }: LeaderAvatarProps) {
  if (gender === 'female') {
    return (
      <div
        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/20 bg-gradient-to-br from-[#003860] via-[#002b4d] to-[#1a1325] flex items-center justify-center group-hover:border-[#ffccd3]/50 group-hover:scale-105 transition-all duration-300 ${className}`}
        aria-label={`${name} avatar`}
      >
        {/* Ambient subtle rose glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(161, 43, 60,0.35)_0%,transparent_70%)] pointer-events-none" />

        {/* Female Executive Icon */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 sm:w-13 sm:h-13 relative z-10 drop-shadow-md"
        >
          {/* Hair Silhouette (Back) */}
          <path
            d="M20 27C19 18 23 10 32 10C41 10 45 18 44 27C43.5 34 42 41 40 43C39.2 44 38 42.5 38 39.5C38 34.5 39 29 39 24.5C39 19 36 17 32 17C28 17 25 19 25 24.5C25 29 26 34.5 26 39.5C26 42.5 24.8 44 24 43C22 41 20.5 34 20 27Z"
            fill="#ffccd3"
            fillOpacity="0.9"
          />

          {/* Face */}
          <path
            d="M32 15.5C27.5 15.5 24.5 19 24.5 24C24.5 28.5 27.5 32 32 32C36.5 32 39.5 28.5 39.5 24C39.5 19 36.5 15.5 32 15.5Z"
            fill="#FFFFFF"
          />

          {/* Front styled hair sweep */}
          <path
            d="M23 21.5C24 15 27.5 12 32 12C36.5 12 40 15 41 21.5C39.5 17 36 15 32 15C28 15 24.5 17 23 21.5Z"
            fill="#ffccd3"
          />

          {/* Neck */}
          <path
            d="M29.5 31H34.5V36.5H29.5V31Z"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />

          {/* Professional Blazer & Blouse / Shoulders */}
          <path
            d="M17 53C17 44 23 39 29 38.5L32 43L35 38.5C41 39 47 44 47 53H17Z"
            fill="#FFFFFF"
          />

          {/* Collar detail */}
          <path
            d="M29 38.5L32 43L35 38.5"
            stroke="#003860"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Subtle bottom indicator badge */}
        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#A12B3C] border border-white/60 shadow-sm" />
      </div>
    );
  }

  // Male Executive Avatar
  return (
    <div
      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/20 bg-gradient-to-br from-[#003860] via-[#002b4d] to-[#08182b] flex items-center justify-center group-hover:border-[#ffccd3]/50 group-hover:scale-105 transition-all duration-300 ${className}`}
      aria-label={`${name} avatar`}
    >
      {/* Ambient subtle navy glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,74,128,0.45)_0%,transparent_70%)] pointer-events-none" />

      {/* Male Executive Icon */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-11 h-11 sm:w-13 sm:h-13 relative z-10 drop-shadow-md"
      >
        {/* Head / Face */}
        <path
          d="M32 16.5C27.5 16.5 24 20 24 25C24 29.5 27.5 33 32 33C36.5 33 40 29.5 40 25C40 20 36.5 16.5 32 16.5Z"
          fill="#FFFFFF"
        />

        {/* Short Executive Trim Hair */}
        <path
          d="M23 23.5C23 15.5 27 11 32 11C37 11 41 15.5 41 21.5C41 23 40 24 38.5 22C37 17.5 34.5 15.5 31.5 15.5C27.5 15.5 25 18.5 24 23.5H23Z"
          fill="#cad8e9"
        />

        {/* Neck */}
        <path
          d="M29.5 32H34.5V37H29.5V32Z"
          fill="#FFFFFF"
          fillOpacity="0.9"
        />

        {/* Suit & Broad Shoulders */}
        <path
          d="M16 53C16 44 22 39 32 39C42 39 48 44 48 53H16Z"
          fill="#FFFFFF"
        />

        {/* Suit Lapels & Tie */}
        <path
          d="M27 39L32 46.5L37 39"
          stroke="#003860"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31 43.5L33 43.5L32.6 51L31.4 51Z"
          fill="#A12B3C"
        />
      </svg>

      {/* Subtle bottom indicator badge */}
      <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#004a80] border border-white/60 shadow-sm" />
    </div>
  );
}
