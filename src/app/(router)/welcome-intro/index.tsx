import { Text, View } from 'react-native'
import { FC } from 'react'

interface IProps {}

const WelcomeIntro: FC<IProps> = ({}) => {
    return (
        <View>
            <Text>Welcome Into App!</Text>
        </View>
    )
}

export default WelcomeIntro
