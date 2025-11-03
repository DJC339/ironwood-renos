/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: { xl: "1200px" }
    },
    extend: {
      colors: {
        // Brand & UI
        primary: "#6b4f3b",
        text: "#333333",
        muted: "#666666",
        bg: {
          DEFAULT: "#ffffff",
          light: "#f8f8f8",
          alt: "#fff8f0",
          form: "#f2f2f2"
        },
        footer: {
          bg: "#222222",
          text: "#cccccc"
        },
        white: "#ffffff"
      },
      fontFamily: {
        body: ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.2rem", { lineHeight: "1.6" }],
        "hero-xl": ["3rem", { lineHeight: "1.1" }]
      },
      borderRadius: {
        sm: "5px",
        md: "8px"
      },
      boxShadow: {
        sm: "0 2px 5px rgba(0,0,0,0.05)"
      }
    }
  },
  plugins: []
}
