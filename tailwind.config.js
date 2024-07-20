// import nunito from "@expo-google-fonts/nunito"
// import raleway from "@expo-google-fonts/raleway"


/** @type {import('tailwindcss').Config} */
module.exports = {
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
        },
    },
    plugins: [],
}

// console.log('raleway', raleway)
// console.log('nutino', nunito)