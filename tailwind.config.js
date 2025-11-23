/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Official Flutter Brand Colors
        flutterBlue: '#02569B',           // Main Flutter Blue
        flutterBlueLight: '#0175C2',      // Light Flutter Blue
        flutterBlueDark: '#01407A',       // Dark Flutter Blue
        flutterSky: '#54C5F8',            // Flutter Sky Blue
        flutterNavy: '#0D47A1',           // Flutter Navy
        
        // Complementary Flutter Colors
        flutterGray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        
        // Light theme colors
        light: {
          bg: '#ffffff',
          surface: '#f8fafc',
          primary: '#1e293b',
          secondary: '#64748b',
          accent: '#0ea5e9',
        },
        
        // Dark theme colors
        dark: {
          bg: '#0d1224',
          surface: '#1e293b',
          primary: '#f1f5f9',
          secondary: '#cbd5e1',
          accent: '#16f2b3',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
      screens: {
        "4k": "1980px",
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [],
}
