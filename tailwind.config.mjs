/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,pure,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          yellow: 'hsl(var(--accent-yellow) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['MADE Tommy', 'Geist Sans', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        '350': '87.5rem', // 1400px
        '360': '90rem',    // 1440px
        '450': '112.5rem', // 1800px
        '550': '137.5rem', // 2200px
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9',
        '3/1': '3 / 1',
      },
    },
  },
  plugins: [],
};
