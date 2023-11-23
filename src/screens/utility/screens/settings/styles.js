import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: themeColors.white,
      alignItems: 'center',
    },

    svgView: { width: 44, height: 44, backgroundColor: "#FFEDD5", borderRadius: 100, alignItems: "center", justifyContent: 'center' }
  });
export default getStyles;
