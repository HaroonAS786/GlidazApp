import { StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: themeColors.white,
		},
		headerSvgView: {
			width: 44,
			height: 44,
			borderRadius: 100,
			// position: 'absolute',
			backgroundColor: "white",
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.20,
			shadowRadius: 1.41,
			elevation: 2,
		},

	});
export default getStyles;
