/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        surface: {
          DEFAULT: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          dark: '#0a0f1c',
          'dark-card': '#0f172a',
          'dark-border': 'rgba(37, 99, 235, 0.15)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh-light': 'radial-gradient(at 40% 20%, hsla(217, 90%, 90%, 0.6) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(210, 85%, 88%, 0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220, 80%, 88%, 0.5) 0px, transparent 50%)',
        'gradient-mesh-dark': 'radial-gradient(at 40% 20%, hsla(217, 80%, 20%, 0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(210, 80%, 18%, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220, 80%, 18%, 0.35) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(37, 99, 235, 0.3)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'glow-lg': '0 0 40px -8px rgba(37, 99, 235, 0.5)',
        'glow-accent': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'card-light': '0 4px 24px -2px rgba(37, 99, 235, 0.08), 0 2px 8px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 16px 40px -6px rgba(37, 99, 235, 0.18), 0 8px 16px -4px rgba(0,0,0,0.06)',
        'card-dark': '0 4px 24px -2px rgba(0,0,0,0.4), 0 1px 2px rgba(37,99,235,0.1)',
        'card-dark-hover': '0 16px 48px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,99,235,0.25)',
        'glass': '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 5s ease infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(37,99,235,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(37,99,235,0.6), 0 0 40px rgba(59,130,246,0.2)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
