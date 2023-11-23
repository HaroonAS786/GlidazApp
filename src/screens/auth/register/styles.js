import { Platform, StyleSheet } from 'react-native';
import { themeColors } from '../../../config/colors';

const getStyles = () =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: themeColors.white,
		},
		headerView: {
			flex: 2,
			backgroundColor: themeColors.authPrimary,
			alignItems: 'center',
		},
		footerView: {
			flex: 8,
			backgroundColor: themeColors.white,
			borderTopRightRadius: 60,
			paddingHorizontal: 16,
			position: 'absolute',
			top: Platform.OS === 'android' ? 180 : 220,
			left: 0,
			right: 0,
			bottom: 0,
			alignSelf: 'flex-end',
		},
		headingView: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		},
		signUpBtn: {
			borderRadius: 18,
			height: 50,
		},
		passInputContainer: {
			borderRadius: 18,
			height: 50,
		},
		registerContainer: {
			alignItems: 'center',
		},
	});
export default getStyles;
