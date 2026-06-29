/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#00263a',
        tealDark: '#001b29',
        tealMid: '#0c3a52',
        tealInput: '#16323f',
        tealFaq: '#0a2f44',
        lime: '#cbca3f',
        snow: '#e9eef0',
        mist: '#cdd7dc',
        mistLight: '#aebcc4',
        outerBg: '#001620',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        faqIn: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        heroUp: {
          from: { opacity: '0', transform: 'translateY(34px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        faqIn: 'faqIn .3s ease both',
        heroUp: 'heroUp .9s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
}
