import { CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';

import CustomText from '../../../../components/CustomText';
import { themeColors } from '../../../../config/colors';
import { IMAGES } from '../../../../utils/imagesAssets';

const CommunityWelcomeScreen = props => {

	useEffect(() => {
		setTimeout(() => {
			props.navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routes: [{ name: 'CommunityStack' }],
				}),
			);
		}, 3000);
	});

	return (
		<ImageBackground
			source={IMAGES.communityWelcome}
			style={{
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<CustomText bold h3 color={themeColors.white}>
				Welcome to
			</CustomText>
			<CustomText bold h1 color={themeColors.white}>
				Glidaz Community
			</CustomText>
		</ImageBackground>
	);
};

export default CommunityWelcomeScreen;
