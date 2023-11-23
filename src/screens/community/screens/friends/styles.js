import { StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,
            paddingHorizontal: 16
        },
    });
export default getStyles;
