import { Text, View } from 'react-native'
import { FC } from 'react'

interface IProps {}

const OnBoardingScreen: FC<IProps> = ({}) => {
    return (
        <View className='h-screen w-screen bg-orange-500'>
            <Text>OnBoardingScreen</Text>
        </View>
    )
}

export default OnBoardingScreen