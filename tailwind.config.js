/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        extraxs: ['10px', '11.5px']
      },
      maxHeight: {
        '0': '0',
        'screen': '100vh',
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
      colors: {
        black: '#070707'
      }
    }
  },
  variants: {
    extend: {
      maxHeight: ['responsive', 'hover', 'focus'],
    }
  },
  plugins: [],
}
