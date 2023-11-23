import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import {
	AppLogoSVGComponent,
	MenuSVGComponent,
	NotificationSVGComponent,
} from '../../../assets/svgs';
import Spacer from '../../../components/Spacer';
import { themeColors } from '../../../config/colors';

const UtilityHomeHeader = ({ onNotifyClick, onMenuClick, headerStyle }) => {

	return (
		<View style={[styles.main, headerStyle]}>
			<AppLogoSVGComponent width={62} height={35} />
			<View style={styles.leftView}>
				<TouchableOpacity onPress={onNotifyClick}>
					<NotificationSVGComponent
						stroke={themeColors.black}
						width={24}
						height={22}
					/>
				</TouchableOpacity>
				<Spacer width={12} />
				<TouchableOpacity onPress={onMenuClick}>
					<MenuSVGComponent stroke={themeColors.black} width={24} height={23} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		alignItems: 'center',
		width: '100%',
	},
	leftView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default UtilityHomeHeader;
