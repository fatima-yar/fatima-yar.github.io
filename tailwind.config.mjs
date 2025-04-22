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
        project: '80%',
        youtube: '56.25%',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scrollFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeScaleIn: 'fadeScaleIn 0.8s ease-out forwards',
        fadeLeft: 'fadeLeft 1s ease-out forwards',
        fadeRight: 'fadeRight 1s ease-out forwards',
        fadeDown: 'fadeDown 1s ease-out forwards',
        zoomIn: 'zoomIn 0.8s ease-out forwards',
        spinSlow: 'spinSlow 3s linear infinite',
        spinOnce: 'spinOnce 1s ease-in-out',
        scrollFadeIn: 'scrollFadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      addUtilities(
        {
          '.hover\\:scale-105:hover': {
            transform: 'scale(1.05)',
          },
        },
        ['responsive', 'hover']
      )
    },
  ],
}
