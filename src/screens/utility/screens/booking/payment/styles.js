import { StyleSheet } from 'react-native';
import { themeColors } from '../../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,

        },
        footer: {
            flex: 6,
            backgroundColor: themeColors.utilityPrime,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 16
        },

        paymentCard: {
            width: 343,
            height: 149,
            borderColor: 'grey',
            borderWidth: .5,
            alignSelf: 'center',
            borderRadius: 8
        },
        paymentCardChild: {
            width: 312,
            height: 86,
            borderColor: 'grey',
            borderWidth: .5,
            alignSelf: 'center',
            borderRadius: 8
        },
        promoCodeContainer: {
            borderRadius: 100,
            borderColor: "lightgrey",
            borderWidth: 1,
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: "space-between"
        },
        promoCodeChildContainer: {
            borderRadius: 100,
            borderColor: "lightgrey",
            borderWidth: 1,
            borderColor: themeColors.utilityPrime,
            backgroundColor: themeColors.utilityPrime,
            alignItems: 'center',
            justifyContent: "space-between",
            padding: 10
        },
        footerView: {
            paddingHorizontal: 20,
            paddingBottom: 30,
        },
        proceedBtn:
        {
            backgroundColor: themeColors.utilityPrime,
            width: 250,
            height: 40,
            alignSelf: "center",
            justifyContent: 'center',
            borderRadius: 8
        },
        paymentView: {
            paddingHorizontal: 20,
            borderColor: "lightgrey",
            borderRadius: 8,
            borderWidth: 1,
            padding: 14,
            marginHorizontal: 20
        }



    });
export default getStyles;
