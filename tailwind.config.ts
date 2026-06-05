import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#131110",
        paperWarm: "#1A1715",
        paperLight: "#1A1715",
        paperAccent: "#211D1A",
        paperDeep: "#2B2521",
        ink: "#E8DED2",
        inkSoft: "#D8CDC1",
        inkMuted: "#BEB3A7",
        inkFaint: "#8F8378",
        seal: "#8B5E56",
        sealSoft: "#A4786F",
        matteBlack: "#131110",
        charcoal: "#1A1715",
        warmIvory: "#E8DED2",
        mutedGold: "#8B5E56",
        deepRed: "#8B5E56",
        stoneGray: "#BEB3A7",
      },
      fontFamily: {
        display: [
          "'Akashii'",
          "'Akashii Brush'",
          "'Akashii Japanese Brush'",
          "var(--font-brush)",
          "serif",
        ],
        serif: [
          "'Akashii'",
          "'Akashii Brush'",
          "'Akashii Japanese Brush'",
          "var(--font-brush)",
          "serif",
        ],
        body: [
          "'Akashii'",
          "'Akashii Brush'",
          "'Akashii Japanese Brush'",
          "var(--font-brush)",
          "serif",
        ],
        jp: ["var(--font-noto-serif-jp)", "serif"],
      },
      backgroundImage: {
        "rice-paper": "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"noiseFilter\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.72\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noiseFilter)\" opacity=\"0.16\"/></svg>')",
      }
    },
  },
  plugins: [],
};
export default config;
