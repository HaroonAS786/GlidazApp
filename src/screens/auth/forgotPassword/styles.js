import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,
        },
        bodyContainer: {
            paddingHorizontal: 16,
            backgroundColor: themeColors.white,
        },
        headerView: {
            alignItems: 'center',
        },
        notRobotContainer: {
            height: 74,
            borderRadius: 12,
            backgroundColor: '#DEDEDE',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
        },
        checkbox: {
            width: 18,
            height: 18,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#999',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 8,
        },
        checkboxInner: {
            width: 12,
            height: 12,
            borderRadius: 4,
            backgroundColor: themeColors.authPrimary,
        },
        checkBoxContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        alertView: {
            flexDirection: 'row',
            width: Dimensions.get('window').width / 1.2,
        },
        sendOtpButton: {
            borderRadius: 18,
            height: 50,
            width: Dimensions.get('window').width / 1.2,
            alignSelf: 'center',
        },
        headingView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
export default getStyles;
