import { StyleSheet } from 'react-native'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    slideImage: {
        alignSelf: 'center',
        marginBottom: 30,
    },
    dot: {
        backgroundColor: "#C6C7CC",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "#2467Ec",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: hp('4%'),
        lineHeight: hp('5%')
    },
    description: {
        fontSize: hp('2%'),
        lineHeight: hp('3%')
    },

})