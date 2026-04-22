/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#FAFAF7',
        ink: '#1C1917',
        forest: {
          DEFAULT: '#3D7A50',
          light: '#5A9E6E',
          dark: '#2A5A38',
        },
        sun: {
          DEFAULT: '#F2C94C',
          light: '#F7DC80',
          dark: '#D4A817',
        },
        stone: {
          150: '#F0EDEB',
        },
      },
      typography: (theme) => ({
        topophilia: {
          css: {
            '--tw-prose-body': theme('colors.stone[700]'),
            '--tw-prose-headings': theme('colors.stone[900]'),
            '--tw-prose-links': theme('colors.forest.DEFAULT'),
            '--tw-prose-bold': theme('colors.stone[900]'),
            '--tw-prose-code': theme('colors.stone[800]'),
            '--tw-prose-pre-bg': theme('colors.stone[100]'),
            '--tw-prose-hr': theme('colors.stone[200]'),
            '--tw-prose-quotes': theme('colors.stone[600]'),
            '--tw-prose-quote-borders': theme('colors.forest.DEFAULT'),
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
