import { Dimensions, Platform, StyleSheet } from 'react-native';
import { themeColors } from '../../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,

        },
        container: {
            paddingHorizontal: 25
        },

        ticketCard: {
            borderRadius: 8,
            borderColor: 'lightgrey',
            borderWidth: 1,
        },

        totalCon: {
            borderRadius: 8,
            borderColor: 'lightgrey',
            borderWidth: 1,
            paddingHorizontal: 12,
            paddingVertical: 12
        },
        refundView: {
            backgroundColor: 'rgba(255, 78, 78, 0.05)',
            borderRadius: 4,
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center'
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
