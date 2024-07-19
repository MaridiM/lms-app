
import { useState } from 'react'
import { Text, View } from 'react-native'
export { ErrorBoundary} from "expo-router"
import OnBoarding from './(router)/onboarding'

import "./styles/global.css"

export default function RootLayout() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)    
    return (
        <View>
            {
                isLoggedIn ? (
                    <View>
                        <Text>Logged In</Text>
                    </View>
                ) : (
                    <OnBoarding />
                )
            }
        </View>
    )
}
