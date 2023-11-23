import { Dimensions, Platform, StyleSheet } from 'react-native';
import { themeColors } from '../../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,

            // backgroundColor: themeColors.white,

        },
        headerView: {
            flex: Platform.OS === 'ios' ? 4 : 3
        },

        footer: {
            flex: 6,
            backgroundColor: themeColors.utilityPrime,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 16,

        },

        aeroPlaneContext: {
            backgroundColor: "transparent",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 100,
            height: Dimensions.get('window').height * 0.7
        },
        flightIndicator: {
            backgroundColor: 'lightgrey',
            width: 8, height: 8, borderRadius: 100,
        }


    });
export default getStyles;
