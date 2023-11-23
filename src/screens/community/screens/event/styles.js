import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,
        },
        imageHeader: {
            borderRadius: 20,
            marginHorizontal: 16,

        },
        image: {
            borderRadius: 10,
            height: Dimensions.get('window').height * 0.19
        },
        scheduleImg: {
            width: 28,
            height: 28
        },
        scheduleImgCon: {
            alignSelf: "flex-end",
            marginRight: 18
        }
    });
export default getStyles;
