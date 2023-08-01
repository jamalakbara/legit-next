/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm:' 100px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Satoshi-Medium', 'sans'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': "url('/img/hero-bg.png')",
        'about-bg': "url('/img/about-bg.png')",
      },
      colors: {
        'figma-black': '#373737',
        'figma-yellow': '#FFBD59',
        'figma-purple': '#5E17EB',
        'figma-white': '#F5F5F5',
      },
      backgroundSize: {
        "figma": "486px",
        "50%": "50%",
        "35%": "35%",
      },
      backgroundPosition: {
        "right-top-100": "right top 100px",
        "rigth--50%": "right -200px top",
        "right-top-250": "right top 250px",
      }
    },
  },
  plugins: [],
}
