import { View, Text } from 'react-native';
import React from 'react';

import getStyles from './styles';

const UtilityHomeScreen = () => {
	const styles = getStyles();
	return (
		<View style={styles.mainContainer}>
			<Text>UtilityHomeScreen</Text>
		</View>
	);
};

export default UtilityHomeScreen;
