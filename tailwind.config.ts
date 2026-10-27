import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
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
        // expanded gradient, incorporate line-height to prevent unnec gaps
        'adaptive_fs_xl': ['clamp(2.0rem, 1.571rem + 2.143vw, 3.5rem)', { lineHeight: '1.2' }],
        'adaptive_fs_l': ['clamp(1.625rem, 1.268rem + 1.786vw, 2.875rem)', { lineHeight: '1.25' }],
        'adaptive_fs_base': ['clamp(1.125rem, 0.946rem + 0.893vw, 1.75rem)', { lineHeight: '1.5' }],
        'adaptive_fs_sm': 'clamp(0.875rem, 0.732rem + 0.714vw, 1.375rem)',
        'adaptive_fs_xs': 'clamp(0.688rem, 0.599rem + 0.446vw, 1.0rem)',
        'adaptive_fs_xxs': 'clamp(0.5rem, 0.411rem + 0.446vw, 0.813rem)',
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
    {
      // 1. Matches colouring (incl plain black / white) utilities
      pattern: /(bg|text|divide)-(black|white|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)|(bg|text|divide)-(black|white)/,
      
      // 2. Cross-multiplies utilities
      variants: [
        'hover', 
        'focus', 
        'sm', 
        'md', 
        'lg', 
        'dark', 
        'dark:hover', 
        'dark:focus'
      ], 
    },
    {
      // 3. Beautify divider lines
      pattern: /(divide)-(x|y)-(0|2|4|6|8|reverse)|(divide)-(x|y)/,
      variants: [
        'hover', 
        'focus', 
        'sm', 
        'md', 
        'lg', 
        'dark', 
        'dark:hover', 
        'dark:focus'
      ], 
    },
  ],
};
export default config;