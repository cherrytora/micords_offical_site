import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF8D41',
        'brand-cream': '#FFF9F5',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.brand-orange'),
              textDecoration: 'none',
              fontWeight: theme('fontWeight.semibold'),
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            h3: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            strong: {
              color: theme('colors.slate.900'),
            },
            code: {
              color: theme('colors.slate.900'),
              backgroundColor: theme('colors.slate.100'),
              padding: '0.2rem 0.35rem',
              borderRadius: theme('borderRadius.md'),
            },
            'blockquote': {
              borderLeftColor: theme('colors.slate.200'),
              color: theme('colors.slate.600'),
              quotes: 'none',
            },
            'blockquote p': {
              margin: 0,
            },
            img: {
              borderRadius: theme('borderRadius.2xl'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
