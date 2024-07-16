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
      scale: {
        105: '1.05',
      },

      colors: {
        darkBlue: '#141336',
        lightGrey: '#EEEEEE',
        brightPink: '#FF00D6',
        dirtyPink: '#c27fbe',
        darkGrey: '#252525',
        purple: '#613896',
        lightBlue: '#8CEAFF',
      },
      backgroundImage: {
        gradientPink: 'linear-gradient(to right, #FF8FED, #D300B1)',
      },
      spacing: {
        55: '55%',
        35: '135px',
        te: '720px',
        project: '375px',
        youtube: '56.25%',
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers', '@tailwindcss/aspect-ratio'),

    function ({ addUtilities }) {
      addUtilities(
        {
          '.hover:scale-105:hover': {
            transform: 'scale(1.05)',
          },
        },
        ['responsive', 'hover']
      )
    },
  ],
}
