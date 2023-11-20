/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textCta: "hsl(var(--text-cta))",
        textWhite: "hsl(var(--text-white))",
        textHeadings: "hsl(var(--text-headings))",
        textBody: "hsl(var(--text-body))",
        textFooter: "hsl(var(--text-footer))",
        bgIntro1: "hsl(var(--bg-intro-1))",
        bgIntro2: "hsl(var(--bg-intro-2))",
        bgCtaHover: "hsl(var(--bg-cta-hover))",
        bgBody1: "hsl(var(--bg-body-1))",
        bgBody2: "hsl(var(--bg-body-2))",
        bgFooter: "hsl(var(--bg-footer))",
      },
      fontFamily: {
        overpass: "Overpass, sans-serif",
        ubuntu: "Ubuntu, sans-serif",
      },
      backgroundImage: {
        "intro-pattern":
          "url('../images/bg-pattern-intro-mobile.svg'), linear-gradient(to bottom, #FF8F70, #FF3D53)",
        "intro-pattern-md":
          "url('../images/bg-pattern-intro-desktop.svg'), linear-gradient(to right, #FF8F70, #FF3D53)",
        "body-pattern":
          "url('../images/bg-pattern-circles.svg'), linear-gradient(to bottom, #2C2D3F, #3F4164)",
        "body-pattern-md":
          "url('../images/bg-pattern-circles.svg'), linear-gradient(to right, #2C2D3F, #3F4164)",
      },
    },
  },
  plugins: [],
};
