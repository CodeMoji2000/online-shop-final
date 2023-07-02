module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        seyed: "#005300",
        header_high: "#D5D0D4",
        header_low: "#FCFAFD",
        header_medium: "#E7E5E6",
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
      xxxl: "2000px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-direction").default],
  presets: [require("tailwind-direction").configPreset],
};
