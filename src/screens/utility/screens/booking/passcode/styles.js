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

        enterBtn:
        {
            backgroundColor: themeColors.utilityPrime,
            height: 40,
            width: '100%',
            alignSelf: "center",
            justifyContent: 'center',
            borderRadius: 8
        },




    });
export default getStyles;
