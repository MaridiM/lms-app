const { hairlineWidth } = require('nativewind/theme')


/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                'raleway-thin': ['Raleway_100Thin'],
                'raleway': ['Raleway_400Regular'],
                'raleway-bold': ['Raleway_700Bold'],
                'nunito': ['Nunito_400Regular'],
                'nunito-bold': ['Nunito_700Bold'],
            },
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                error: {
                    DEFAULT: 'hsl(var(--error))',
                },
                dot: {
                    DEFAULT: 'hsl(var(--dot))',
                    hover: 'hsl(var(--dot-active))',
                },
                font: {
                    DEFAULT: 'hsl(var(--font-color))',
                    description: 'hsl(var(--font-color-description))',
                    placeholder: 'hsl(var(--font-color-placeholder))',
                    error: 'hsl(var(--font-color-error))',
                },
                input: {
                    DEFAULT: 'hsl(var(--input))',
                }
            },
            borderWidth: {
                hairline: hairlineWidth(),
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}