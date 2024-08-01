import AppIntroSlider from 'react-native-app-intro-slider'
import { useColors } from '@/shared/libs/hooks'
import { IOnboardingSwiperDataType } from '@/shared/types'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Image, View } from 'react-native'
import { onboardingSwiperData } from '@/screens/WelcomeIntroScreen/constants/constants'
import { router } from 'expo-router'
import { paths } from '@/shared/config/routes'
import { Button, Text } from '@/shared/ui'
import { cn } from '@/shared/libs/utils'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { styles } from '../styles'

interface IProps {}

const WelcomeIntroScreen: FC<IProps> = ({}) => {
    const { gradients, dot } = useColors()

    const renderButton = (text: string) => {
        return (
            <View className={cn(`flex justify-center items-center py-4 bg-primary rounded-md my-[6px] w-[${responsiveWidth(88)}] h-[${responsiveWidth(2.5)}]`)}>
                <Text className='font-nunito text-white'>{text}</Text>
            </View>
        )
    }

    const renderItem = ({ item }: { item: IOnboardingSwiperDataType }) => {
        return (
            <LinearGradient
                colors={gradients.welocmeIntro}
                className='flex-1 items-center'
            >
                <View className='mt-[100px]'>
                    <Image
                        source={item.image}
                        style={styles.slideImage}
                    />
                    <Text className='text-center font-raleway-bold text-font' style={styles.title}>{item.title}</Text>
                </View>
                <View className='mt-4'>
                    <Text className='text-center font-raleway text-font-description' style={styles.description}>{item.sortDescrition}</Text>
                    <Text className='text-center font-raleway text-font-description' style={styles.description}>{item.sortDescrition2}</Text>
                </View>
            </LinearGradient>
        )
    }
    return (
        <AppIntroSlider
            renderItem={renderItem}
            data={onboardingSwiperData}
            onDone={() => router.push(paths.login())}
            onSkip={() => router.push(paths.login())}
            renderNextButton={() => renderButton('Next')}
            renderDoneButton={() => renderButton('Done')}
            showSkipButton={false}
            dotStyle={styles.dot}
            bottomButton={true}
            activeDotStyle={styles.activeDot}
        />
    )
}

export default WelcomeIntroScreen