module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      currentColor: "currentColor",
      bone: "#dad7d2",
      smoke: "#8F8E8C"
    },
    fontFamily: {
      playfair: ['"Playfair Display"', "serif"],
      lato: ['"Open Sans"', "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
