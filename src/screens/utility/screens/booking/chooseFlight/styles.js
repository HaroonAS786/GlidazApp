import { Platform, StyleSheet } from 'react-native';
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

        sortFilterView: {
            width: 200,

            padding: 12,
            backgroundColor: 'white',
            borderRadius: 100,
            position: 'absolute',
            // left: 0,
            // right: 0,
            bottom: 25,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
        }

    });
export default getStyles;
