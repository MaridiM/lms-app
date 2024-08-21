import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    signInImage: {
        width: wp('60%'),
        height: 250,
        alignSelf: 'center',
        marginTop: 50
    },
})