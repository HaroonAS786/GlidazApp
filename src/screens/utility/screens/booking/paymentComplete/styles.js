import { Dimensions, Platform, StyleSheet } from 'react-native';
import { themeColors } from '../../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,

        },
        headerView: {
            flex: Platform.OS === 'ios' ? 4 : 3
        },

        footer: {
            flex: 6,
            backgroundColor: themeColors.utilityPrime,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 16
        },

        paymentChild: {
            width: 312,
            height: 86,
            borderColor: 'grey',
            borderWidth: .5,
            alignSelf: 'center',
            borderRadius: 8,

        },
        seeDetailsBtn:
        {
            backgroundColor: themeColors.utilityPrime,
            width: Dimensions.get('window').width / 1.1,
            height: 40,
            alignSelf: "center",
            justifyContent: 'center',
            borderRadius: 8
        },


    });
export default getStyles;
