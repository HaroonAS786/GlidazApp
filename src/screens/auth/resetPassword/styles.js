import {Dimensions, StyleSheet} from 'react-native';
import {themeColors} from '../../../config/colors';

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

    countTimer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    alertView: {
      flexDirection: 'row',

      width: Dimensions.get('window').width / 1.2,
    },

    savePassword: {
      borderRadius: 18,
      height: 50,
      width: Dimensions.get('window').width / 1.1,
      alignSelf: 'center',
      backgroundColor: themeColors.orangePrimary,
    },

    headingView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default getStyles;
