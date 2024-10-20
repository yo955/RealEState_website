/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/cover2.jpeg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6b6b6b",
        secondary: "#f7f6f2",
      },
    },
  },
  plugins: [],
};
