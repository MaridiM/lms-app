import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    logo: {
        width: wp('23%'),
        height: hp('10%')
    },
    shape1: {
        position: 'absolute',
        left: -28,
        top: -20
    },
    shape2: {
        position: 'absolute',
        right: -40,
        top: -20
    },
    shape3: {
        position: 'absolute',
        left: 60
    },
    text: {
        fontSize: hp('4%'),
        lineHeight: hp('5%')
    },
    descriptionText: {
        fontSize: hp('2%'),
        lineHeight: hp('3%')
    },
})