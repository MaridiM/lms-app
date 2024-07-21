
import * as SplashScreen from "expo-splash-screen"

import OnBoarding from './(router)/onboarding'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useFonts } from "expo-font"
import { Theme, ThemeProvider } from '@react-navigation/native'
import { Platform } from 'react-native'
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito"
import { Raleway_100Thin, Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway"

import "./styles/global.css"
import { useColorScheme } from "@/shared/libs/hooks"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NAV_THEME } from "@/shared/libs/constants"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";


const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);
    const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();

    const [fontsLoaded] = useFonts({
        Raleway_100Thin,
        Raleway_400Regular,
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold,
    });

    useEffect(() => {
        !fontsLoaded && SplashScreen.hideAsync();
    }, [fontsLoaded]);

    useEffect(() => {
        (async () => {
            const theme = await AsyncStorage.getItem('theme');
            if (Platform.OS === 'web') {
                // Adds the background color to the html element to prevent white background on overscroll.
                document.documentElement.classList.add('bg-background');
            }
            if (!theme) {
                AsyncStorage.setItem('theme', colorScheme);
                setIsColorSchemeLoaded(true);
                return;
            }
            const colorTheme = theme === 'dark' ? 'dark' : 'light';
            if (colorTheme !== colorScheme) {
                setColorScheme(colorTheme);

                setIsColorSchemeLoaded(true);
                return;
            }
            setIsColorSchemeLoaded(true);
        })().finally(() => {
            SplashScreen.hideAsync();
        });
    }, []);

    if (!fontsLoaded || !isColorSchemeLoaded) return null

    return (
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
            <View className='flex-1'>
                {
                    isLoggedIn ? (
                        <View className="flex-1 justify-center items-center">
                            <Text className="text-center text-2xl font-raleway-bold">Logged In</Text>
                        </View>
                    ) : (
                        <OnBoarding />
                    )
                }
            </View>
        </ThemeProvider>
    )
}
