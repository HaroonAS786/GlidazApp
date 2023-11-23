import { StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,
        },
        header: {
            backgroundColor: themeColors.authPrimary,
            padding: 20
        }
    });
export default getStyles;
