import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, StyleSheet, View } from 'react-native';

import { BookingSVGComponent, FlightScheduleSVGComponent, HomeSVGComponent, LiveSVGComponent, MenuSVGComponent } from '../../../assets/svgs';
import { CommonActions } from '@react-navigation/native';
import { bottomTab, screenAnimation } from '../../../utils/helper';

const Tab = createBottomTabNavigator();

export const TabBarOptions = ({ focused, svgIcon, title, index }) => {
	return (
		<View
			style={{
				backgroundColor: focused ? '#60A5FA' : 'transparent',
				alignItems: 'center',
				borderRadius: 20,
				padding: 6
			}}>
			{svgIcon}
		</View>
	);
};

const tabIconComponent = (focused, SVG, title, index) => (
	<TabBarOptions focused={focused} svgIcon={SVG} title={title} index={index} />
);

const renderSVG = (focused, screen, styles, props) => {
	switch (screen) {
		case 'Home':
			return <HomeSVGComponent stroke={'black'} />
		case 'Booking':
			return <BookingSVGComponent stroke={'black'} />
		case 'EventScreen':
			return <FlightScheduleSVGComponent stroke={'black'} />
		case 'LiveStreamVedio':
			return <LiveSVGComponent />
		case 'UserProfle':
			return <View
				style={styles.profileViewContainer}
			>
				<Image
					source={{
						uri: 'https://media.istockphoto.com/id/1434947698/photo/working-computer-email-and-business-man-from-china-serious-about-fixing-a-laptop-glitch.webp?b=1&s=170667a&w=0&k=20&c=TJKjKgbUxYKPPV6f_M28K2Khtoz_34K4l3FfL5LAd7E=',
					}}
					style={styles.profileView}
					resizeMode="cover"
				/>
				<View style={styles.profileChildView}>
					<MenuSVGComponent />
				</View>
			</View>
	}
};

export default function MyBottomTabs(props) {
	return (
		<Tab.Navigator
			screenOptions={{
				animations: screenAnimation,
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#D0D0D0",
					position: 'absolute',
					borderRadius: 20,
					marginHorizontal: 20,
					marginBottom: 20,
					paddingTop: Platform.OS === 'android' ? 0 : 20,
					height:
						Platform.OS === 'android'
							? 60
							: 80,
				},
			}}>
			{bottomTab.map((item, index) => {
				return (
					<>
						<Tab.Screen
							key={index}
							options={{
								showLabel: false,
								tabBarIcon: ({ focused }) =>
									tabIconComponent(
										focused,
										renderSVG(focused, item.name, styles),
										item.name,
										index,
										props
									),
							}}
							listeners={{
								tabPress: e => {
									if (index === 1) {
										props.navigation.dispatch(
											CommonActions.reset({
												index: 0,
												routes: [{ name: 'UtilityWelcomeScreen' }],
											}),
										);
									}
								},
							}}
							name={item.name}
							component={item.component}
						/>
					</>
				);
			})}
		</Tab.Navigator>
	);
}


const styles = StyleSheet.create({

	profileChildView: {
		width: 12,
		height: 12,
		borderRadius: 100,
		position: 'absolute',
		backgroundColor: 'white',
		right: 0,
		bottom: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	profileViewContainer: {
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},

	profileView: {
		width: 44,
		height: 44,
		borderRadius: 100,
	},

	navBar: {
		flexDirection: 'row',
		backgroundColor: '#D0D0D0',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingHorizontal: 16,
		borderRadius: 100,
		width: '90%',
		height: 60,
	},
})
