/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'tomato': 'hsl(4, 100%, 67%)',
        'dark-slate-grey' : 'hsl(234, 29%, 20%)',
        'charcoal-grey' : 'hsl(235, 18%, 26%)',
        'grey' : 'hsl(231, 7%, 60%)',
        'white' : 'hsl(0, 0%, 100%)',
      },
      screens : {
        'mobile' : '375px',
        'tablet' : '641px',
        'small-laptop' : '1024px',
        'laptop' : '1366px',
        'desktop' : '1440px',
      },
      keyframes : {
        enter : {
          'from' : { transform: 'translateX(120px)', opacity: 0 },
          'to' : { transform: 'translateX(0)', opacity: 1 },
        },
        exit : {
          'from' : { transform: 'translateX(0)', opacity: 1 },
          'to' : { transform: 'translateX(-120px)', opacity: 0 },
        }
      },
      animation : {
        'enter' : 'enter 1s ease-in-out forwards',
        'exit' : 'exit 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

