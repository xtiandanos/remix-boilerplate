// import type { Config } from 'tailwindcss';

// export default {
//   content: ['./app/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       // colors: {
//       //   "dark-purple" : "#81A51",
//       //   "light-white" : "rgba(255,255,255,0.18"
//       // }
//     },
//   },
//   plugins: [],
// } satisfies Config

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#81A51",
        "light-white": "rgba(255,255,255,0.18",
      },
    },
  },
  plugins: [],
};
