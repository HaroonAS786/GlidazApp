import { StyleSheet } from 'react-native';
import { themeColors } from '../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,
        },
        main: {
            backgroundColor: 'white',
            alignItems: 'center',

            width: '100%',
            height: '100%',
        },
        headerView: {
            flex: 2,
            width: '100%',
            backgroundColor: themeColors.authPrimary,
            alignItems: 'center',
        },
        leftFooterView: {
            flex: 8,
            backgroundColor: themeColors.white,
            borderTopRightRadius: 60,
            paddingHorizontal: 16,
            position: 'absolute',
            alignItems: 'center',
            top: 180,
            left: 0,
            right: 0,
            bottom: 0,
            alignSelf: 'flex-end',
        },

        footerView: {
            flex: 8,
            backgroundColor: themeColors.white,
            borderTopRightRadius: 60,
            paddingHorizontal: 16,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            top: 180,
            left: 0,
            right: 0,
            bottom: 0,
            alignSelf: 'flex-end',
        },

        appLogo: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 20,
        },

        button: {
            width: 256,
            height: 60,
            backgroundColor: 'rgba(69, 128, 240, 1)',
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        },


        leftSwipe: {
            flex: 1,
            alignItems: 'center',
        },
        rightSwipe: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
export default getStyles;
