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
                    secondary: '#581c87',
                    accent: '#c026d3',
                    neutral: '#4f46e5',
                    'base-100': '#111827',
                    info: '#0ea5e9',
                    success: '#4ade80',
                    warning: '#fbbd23',
                    error: '#dc2626',
                },
            },
            'night',
        ],
    },
};
