
import * as SplashScreen from "expo-splash-screen"

import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useFonts } from "expo-font"
import { Raleway_100Thin, Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway"
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito"
import OnBoarding from './(router)/onboarding'

import "./styles/global.css"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

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

    if (!fontsLoaded) return null

    return (
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
            <StatusBar style="inverted" />
        </View>
    )
}
