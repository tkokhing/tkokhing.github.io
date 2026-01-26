import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: { 
        marquee: { 
          '0%': { transform: 'translateX(100%)' }, 
          '100%': { transform: 'translateX(-100%)' }, 
        },
        stopMarquee: {
          '0%, 100%': { transform: 'translateX(0%)' },
        }
      }, 
      animation: { 
        marquee: 'marquee 15s linear infinite',
        stopMarquee: 'None' 
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        "tkokhing-blue": "#0071C1",
        "tkokhing-dark":"#D9F99D",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        'adaptive_fs_xl': 'clamp(2rem, calc(5.5vw), 4.5rem)',
        'adaptive_fs_l': 'clamp(1.7rem, calc(4.2vw), 3.5rem)',
        'adaptive_fs_base': 'clamp(1.2rem, calc(3vw), 3rem)',
        'adaptive_fs_sm': 'clamp(0.875rem, calc(2vw), 2rem)',
        'adaptive_fs_xs': 'clamp(0.625rem, calc(1vw), 2rem)',
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  safelist: [
    'prose-sm',
    'prose-base',
    'prose-lg',
    'prose-xl',
    'prose-2xl',
  ],
};
export default config;
