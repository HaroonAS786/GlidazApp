import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../../../../config/colors';

const getStyles = () =>
	StyleSheet.create({
		btnView: {
			borderRadius: 20,
			backgroundColor: '#D2A53A',
			width: 340,
			height: 48,

		},
		searchBtn: {
			borderRadius: 17,
			backgroundColor: themeColors.utilityPrime
		},

		mainContainer: {
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'white',
		},

		btnContainer: {
			alignItems: 'center',
			width: Dimensions.get('window').width,
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


		fabButton: {
			backgroundColor: 'lightgrey',
			width: 44,
			height: 44,
			borderRadius: 20
		},

		fabContainer: {
			marginTop: Platform.OS === 'ios' ? 380 : 300,
			width: Dimensions.get('window').width,
			alignItems: 'flex-end',
			paddingHorizontal: 16
		},

		itemView: {
			backgroundColor: themeColors.red,
			borderColor: 'grey',
			borderWidth: 1,
			padding: 10,
			borderRadius: 20,
			marginRight: 16
		},
		activeItemView: {
			backgroundColor: themeColors.authPrimary,
			borderColor: themeColors.authPrimary,
			padding: 10,
			borderRadius: 20,
			marginRight: 16
		},

		slider: {
			width: 50,
			height: 2,
			backgroundColor: themeColors.authPrimary
		},

	});
export default getStyles;
