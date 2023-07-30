/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'figma-black': '#373737',
        'figma-yellow': '#FFBD59',
        'figma-purple': '#5E17EB',
        'figma-white': '#F5F5F5',
      },
      backgroundSize: {
        "figma": "486px",
      },
      backgroundPosition: {
        "figma-right-top": "right top 100px",
        "figma-left-bottom": "left bottom 100px",
      }
    },
  },
  plugins: [],
}
