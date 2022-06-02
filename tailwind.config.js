module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3B82FC",
          secondary: "rgb(200, 115, 22)",
          accent: "#F4BFBF",
          neutral: "#8CC0DE",
          footer: '#000000',
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
    fontFamily: {
      Lato: ["Lato', sans-serif"],
    },
  },
  plugins: [require("daisyui")],
}