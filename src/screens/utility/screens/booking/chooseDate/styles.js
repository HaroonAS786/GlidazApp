import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,

        },
        headerView: {
            paddingTop: 25,
            paddingBottom: 25,
            backgroundColor: themeColors.utilityPrime
        },

    });
export default getStyles;
