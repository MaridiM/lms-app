import { Image, Text, View } from 'react-native'
import { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useColors } from '@/shared/libs/hooks'
import { styles } from './styles'

interface IProps {}

const OnBoardingScreen: FC<IProps> = ({}) => {
    const { gradients } = useColors()
     
    return (
        <LinearGradient
            colors={gradients.onboarding}
            className='flex-1 items-center justify-center'
        >
            <View className='felx-1 items-center mt-[50px]'>
                <View>
                    <Image
                        source={require('@/shared/assets/logo.png')}
                        style={styles.logo}
                    />
                    <Image source={require('@/shared/assets/onboarding/shape_9.png')} />
                </View>

                
                <View className='flex flex-row'>
                    <Image
                        source={require('@/shared/assets/onboarding/shape_3.png')}
                        style={styles.shape3}
                    />
                    <Text className='text-center text-4xl font-raleway-bold'>Start Learning With</Text>
                    <Image
                        source={require('@/shared/assets/onboarding/shape_2.png')}
                        style={styles.shape2}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

export default OnBoardingScreen