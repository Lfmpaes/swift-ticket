/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: [
            {
                'ts-colors': {
                    primary: '#c084fc',
                    secondary: '#5b21b6',
                    accent: '#8b5cf6',
                    neutral: '#4f46e5',
                    'base-100': '#111827',
                    info: '#0ea5e9',
                    success: '#4ade80',
                    warning: '#fbbd23',
                    error: '#dc2626',
                },
            },
        ],
    },
};
