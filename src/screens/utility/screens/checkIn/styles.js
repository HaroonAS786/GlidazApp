import { Dimensions, Platform, StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>

	StyleSheet.create({

		mainContainer: {
			flex: 1,
			backgroundColor: themeColors.white,
		},
		headerCon: { backgroundColor: themeColors.utilityPrime, height: Platform.OS === 'ios' ? 200 : 150, justifyContent: "center" },
		bodyContainer: { backgroundColor: themeColors.white, flex: 1 },
		flighCardView: {
			width: Dimensions.get('window').width / 1.18,
			backgroundColor: themeColors.white,
			marginHorizontal: 30,
			paddingHorizontal: 16,
			paddingVertical: 16,
			borderRadius: 5,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.20,
			shadowRadius: 1.41,
			elevation: 2,
		}
		,
		btnView: {
			borderRadius: 20,
			backgroundColor: '#D2A53A',
			width: 340,
			height: 48,

		},
		btnContainer: {
			flex: 1,
			justifyContent: 'flex-end',
			alignItems: 'center',
			paddingBottom: 30,
			width: Dimensions.get('window').width,
		}
	});
export default getStyles;
