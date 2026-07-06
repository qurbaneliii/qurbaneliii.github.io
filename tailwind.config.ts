import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#020617',
        panel: '#0f172a',
        line: 'rgba(148, 163, 184, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(20, 184, 166, 0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config;
