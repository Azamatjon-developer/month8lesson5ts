/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      backgroundImage: {
        'hero-background': 'url(/assets/Images/background.png)',
        'shop-background': 'url(/assets/Images/shop.png)',
      },
      colors: {
        primary: '#3490dc',
        secondary: '#2ecc71',
        accent: '#34495e',
        error: '#e74c3c',
      },
    },
  },
  plugins: [],
}
