/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "oval-shadow": "0px 8px 15px rgba(0, 0, 0, 0.2)", // Custom shadow for oval
      },
    },
  },
  plugins: [],
};
