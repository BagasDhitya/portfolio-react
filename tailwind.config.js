/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "porto-sky-500": "#0284c7",
        "porto-sky-700": "#0369a1",
        "porto-white": "#f1f5f9",
        "porto-black": "#0a0a0a",
      },
    },
  },
  plugins: [],
};
