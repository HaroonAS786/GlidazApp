import { StyleSheet } from 'react-native';
import { themeColors } from '../../../config/colors';

const getStyles = () =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: themeColors.authPrimary,
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
		logoContainer: {
			alignItems: 'center',
		},
		rememberForgot: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingHorizontal: 12,
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
	});
export default getStyles;
