import { StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: themeColors.white,

		},
		headerView: {
			paddingHorizontal: 16,
			alignItems: 'center',
			marginHorizontal: 16,
		},
		roundTripLabel:
		{
			marginRight: 6,
			backgroundColor: "#414C5B",
			height: 33,
			paddingTop: 6,
			flex: 1,
			alignItems: "center",
			borderTopLeftRadius: 100,
			borderBottomLeftRadius: 100
		},
		activeRoundTripLabel:
		{
			marginRight: 6,
			backgroundColor: "#414C5B",
			height: 33,
			paddingTop: 6,
			flex: 1,
			alignItems: "center",
			borderTopLeftRadius: 100,
			borderBottomLeftRadius: 100,
			borderBottomColor: "#FAC45E",
			borderTopColor: "#414C5B",
			borderRightColor: "#414C5B",
			borderLeftColor: "#414C5B",
			borderWidth: 2,
		},

		oneWayLabel:
		{
			marginRight: 6,
			backgroundColor: "#414C5B",
			height: 33,
			paddingTop: 6,
			flex: 1,
			alignItems: "center",
		},
		activeOneWayLabel:
		{
			marginRight: 6,
			backgroundColor: "#414C5B",
			height: 33,
			paddingTop: 6,
			flex: 1,
			alignItems: "center",
			borderBottomColor: "#FAC45E",
			borderWidth: 2,
			borderTopColor: "#414C5B",
			borderRightColor: "#414C5B",
			borderLeftColor: "#414C5B",
		},

		MultipleLabel:
		{
			marginRight: 6,
			backgroundColor: "#414C5B",
			height: 33,
			paddingTop: 6,
			flex: 1,
			alignItems: "center",
			borderTopRightRadius: 100,
			borderBottomRightRadius: 100
		},
		activeMultipleLabel:
		{

			backgroundColor: "#414C5B",
			height: 33,
			paddingTop: 6,
			flex: 1,
			alignItems: "center",
			borderTopRightRadius: 100,
			borderBottomRightRadius: 100,
			borderBottomColor: "#FAC45E",
			borderTopWidth: 0,
			borderRightColor: '#414C5B',
			borderLeftWidth: 0,
			borderWidth: 2,

		},
		roundTripContainer: {
			paddingBottom: 30,
			paddingHorizontal: 16,
			justifyContent: "space-between",
			alignItems: 'center',
			flexDirection: "row"
		},
		editSvg: {
			position: 'absolute',
			right: 30,
			top: 16
		},

		footer: {
			paddingHorizontal: 16,
		},

		cashMilesView: {
			borderColor: "#FAC45E",
			borderRadius: 5,
			borderWidth: 1,
			height: 23,
			width: 90,
		}
	});
export default getStyles;
