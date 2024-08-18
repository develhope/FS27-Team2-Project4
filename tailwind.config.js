/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      extend: {},
    },
    colors: {
      "dark-green": "#526742",
      "light-green": "#92aa7f",
      pink: "#f6bcb2",
      "light-grey": "#d7d7d7",
      "dark-grey": "#1e1e1e",
      "soft-grey": "#9CA3AF",
      "dark-purple": "#674274",
      "light-purple": "#9f7cb4",
      "dark-blue": "#1d3557",
      "light-blue": "#457b9d",
      yellow: "#f7e3af",
      white: "#ffffff",
    },
    plugins: [],
  },
};
