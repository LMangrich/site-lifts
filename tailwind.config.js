import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#002539',
        tealDark: '#001b29',
        tealMid: '#0c3a52',
        tealInput: '#16323f',
        tealFaq: '#0a2f44',
        lime: '#c9c83e',
        snow: '#e9eef0',
        mist: '#cdd7dc',
        mistLight: '#aebcc4',
        outerBg: '#001620',
        formCard: '#32302e',
        inputColor: '#554945',
      },
      backgroundImage: {
        checker:
          'linear-gradient(45deg,currentColor 25%,transparent 0,transparent 75%,currentColor 0),' +
          'linear-gradient(45deg,currentColor 25%,transparent 0,transparent 75%,currentColor 0)',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
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
  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          margin: '0',
          fontFamily: theme('fontFamily.sans'),
          background: theme('colors.outerBg'),
          color: theme('colors.snow'),
          WebkitFontSmoothing: 'antialiased',
        },
        'h1, h2, h3': { margin: '0' },
        a: { textDecoration: 'none', color: 'inherit' },
        'input, textarea': { fontFamily: theme('fontFamily.sans') },
      })

      addUtilities({
        '.msym': {
          fontFamily: 'Material Symbols Outlined',
          fontWeight: 'normal',
          fontStyle: 'normal',
          lineHeight: '1',
          display: 'inline-block',
          letterSpacing: 'normal',
          textTransform: 'none',
          wordWrap: 'normal',
          whiteSpace: 'nowrap',
          direction: 'ltr',
        },
      })
    }),
  ],
}
