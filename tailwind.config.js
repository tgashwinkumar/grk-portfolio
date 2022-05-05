module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      currentColor: "currentColor",
      bone: "#e3dac9",
    },
    fontFamily: {
      playfair: ['"Playfair Display"', "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
