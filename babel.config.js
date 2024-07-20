module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [
            "react-native-reanimated/plugin",
            [
                'module-resolver',
                {
                    alias: {
                        '@/': './src',
                        '@/app': './src/app',
                        '@/screens': './src/screens',
                        '@/features': './src/features',
                        '@/widgets': './src/widgets',
                        '@/entities': './src/entities',
                        '@/shared': './src/shared',
                        '@/types': './src/types',
                    },
                },
            ],
        ]
    };
};