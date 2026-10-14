import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ===== Existing =====
          crimson: '#D70342',
          navy: '#343F5A',
          darkBg: '#0C0E14',
          cardDark: '#212121',
          iceBg: '#F9FBFD',
          textMuted: '#777777',
          textDark: '#222222',
          linkBlue: '#4F80FF',
          accentPurple: '#6564FF',
          borderLight: '#E8E8E8',

          // ===== NEW — Logo Colors =====
          burgundy: '#9F1D2C', // Primary brand red (logo tree)
          burgundyHover: '#851823',
          burgundyLight: '#F4C7CC',
          burgundySoft: '#FDF2F3',
          navyBrand: '#1E4A7D', // Primary brand blue (logo text)
          navyDark: '#0F2547',
        },

        // ===== Full Burgundy Scale =====
        burgundy: {
          50: '#FDF2F3',
          100: '#FBE3E5',
          200: '#F4C7CC',
          300: '#E99AA2',
          400: '#D85C68',
          500: '#9F1D2C',
          600: '#851823',
          700: '#6D131C',
          800: '#560F17',
          900: '#3F0B11',
        },

        // ===== Full Navy Scale =====
        navy: {
          50: '#F0F5FA',
          100: '#DCE7F2',
          200: '#B8CFE4',
          300: '#8AADD0',
          400: '#4F7FAC',
          500: '#1E4A7D',
          600: '#193F6A',
          700: '#143355',
          800: '#0F2547',
          900: '#0A1A33',
        },
      },
      fontFamily: {
        kanit: ['var(--font-kanit)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        redhat: ['var(--font-redhat)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'flow-down': 'flow-down 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'flow-down': {
          '0%': { top: '-15%', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
