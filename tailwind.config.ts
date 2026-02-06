import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // INEY Brand Colors
                primary: {
                    DEFAULT: '#554D75', // Mauve/violet profond - couleur principale
                    light: '#6B628E',
                    dark: '#3F3856',
                },
                accent: {
                    DEFAULT: '#C2C3C4', // Argent luxe
                    light: '#D8D9DA',
                    dark: '#A8A9AA',
                },
                neutral: {
                    dark: '#0D0D0D', // Neutre foncé - texte principal
                    light1: '#F2EFEA', // Neutre clair 1 - fond principal
                    light2: '#DFE5F3', // Neutre clair 2 - fonds alternatifs
                },
                // New Purple Color Scheme
                purple: {
                    light: '#C4B5FD', // Lavender - soft, calming violet
                    vibrant: '#D946EF', // Magenta - bold, energetic purple
                },
                // Semantic colors
                background: '#F2EFEA',
                foreground: '#0D0D0D',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
