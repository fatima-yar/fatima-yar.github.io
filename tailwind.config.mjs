/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        cantora: ['Cantora One', 'sans-serif'],
        lilita: ['Lilita One', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      colors: {
        darkBlue: '#141336',
        lightGrey: '#EEEEEE',
        brightPink: '#FF00D6',
        dirtyPink: '#c27fbe',
        darkGrey: '#252525',
      },
      backgroundImage: {
        gradientPink: 'linear-gradient(to right, #D690CA, #B4139A)',
      },
      spacing: {
        55: '55%',
        35: '135px',
        te: '720px',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}
