/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'mobile':'480px',
      'tablet':'640px',
      'laptop':'1024px',
      'desktop':'1280px'
    },
    fontFamily:{
      'display':['"PlayfairDisplay"'],
      'body':['"Satoshi"']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}

