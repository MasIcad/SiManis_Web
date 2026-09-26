import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'medical-blue': '#1E4E79',
        'medical-blue-dark': '#0F2C47',
        'medical-blue-deep': '#0A1C2E',
        'medical-blue-light': '#2B6EA8',
        'medical-blue-subtle': '#E8F1F8',
        'digital-cyan': '#0284C7',
        'digital-cyan-bright': '#38BDF8',
        'digital-cyan-glow': '#7DD3FC',
        'digital-cyan-light': '#E0F2FE',
        'digital-cyan-dark': '#0369A1',
        'sweet-coral': '#E11D48',
        'sweet-coral-bright': '#F43F5E',
        'sweet-coral-soft': '#FDA4AF',
        'sweet-coral-light': '#FFE4E6',
        'sterile-white': '#F8FAFC',
        'tech-silver': '#CBD5E1',
        'tech-silver-light': '#F1F5F9',
        'tech-silver-border': '#E2E8F0',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config