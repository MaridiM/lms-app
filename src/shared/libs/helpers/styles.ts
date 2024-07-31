import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'


export const createWidthStyle = (width: string) => ({
    width: wp(width),
})