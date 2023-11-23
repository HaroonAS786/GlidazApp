import { StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: themeColors.red,
			alignItems: 'center',
			justifyContent: 'center',
		},
	});
export default getStyles;
