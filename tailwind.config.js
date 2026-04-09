/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#FFC50C',
        'gold-dark': '#e6b200',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        hero:  "url('/img/bg.jpg')",
        about: "url('/img/about-bg.jpg')",
      },
      // ✅ Named keyframes — no more arbitrary animate-[] classes
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.6' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.75s ease forwards',
        'fade-up-slow': 'fadeUp 1s ease forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
        'pulse-ring':   'pulseRing 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
