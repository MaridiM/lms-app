import cn from 'clsx'
import { FC } from 'react'
import { Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useColors } from '@/shared/libs/hooks'
import { styles } from '../styles/styles'
import { Button, Text } from '@/shared/ui'

interface IProps {}

const OnBoardingScreen: FC<IProps> = ({}) => {
    const { gradients } = useColors()
     
    return (
        <LinearGradient
            colors={gradients.onboarding}
            className='flex-1 items-center justify-center'
        >
            <View className='felx-1 items-center mt-[50px] px-5'>
                <View>
                    <Image
                        source={require('@/shared/assets/logo.png')}
                        style={styles.logo}
                    />
                    <Image source={require('@/shared/assets/onboarding/shape_9.png')} />
                </View>

                
                <View>
                    <Image
                        source={require('@/shared/assets/onboarding/shape_3.png')}
                        style={styles.shape1}
                    />
                    <Text
                        className={cn('text-center font-raleway-bold')}
                        style={styles.text}
                    >
                        Start Learning With
                    </Text>
                    <Image
                        source={require('@/shared/assets/onboarding/shape_2.png')}
                        style={styles.shape2}
                    />
                </View>
                <View>
                    <Image
                        source={require('@/shared/assets/onboarding/shape_6.png')}
                        style={styles.shape3}
                    />
                    <Text
                        className='text-center text-3xl font-raleway-bold'
                        style={styles.text}
                    >
                        Becodemy
                    </Text>
                </View>
                <View className='mt-[30px]'>
                    <Text
                        className='text-center font-nunito text-[#575757]'
                        style={styles.descriptionText}
                    >
                        Explore a variety of interactive lessons,
                    </Text>
                    <Text
                        className='text-center font-nunito text-[#575757]'
                        style={styles.descriptionText}
                    >
                        video, quizze & assignment.
                    </Text>
                </View>

                <Button
                    className='mt-[30px]'
                    size='lg'
                    width='92%'
                >
                    <Text className='font-nunito'>Getting Starting</Text>
                </Button>
                

            </View>
        </LinearGradient>
    )
}

export default OnBoardingScreen