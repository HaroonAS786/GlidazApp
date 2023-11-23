import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Platform, ScrollView, View } from 'react-native';

import { AppLogoSvg2Component } from '../../../../assets/svgs';
import ButtonComponent from '../../../../components/ButtonComponent';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import CustomDropDown from '../../../../components/common/CustomDropDown';
import Header from '../../../../components/common/Header';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import { themeColors } from '../../../../config/colors';
import { RenderUtilityScreens } from '../../../../utils/helper';
import getStyles from './styles';

const FlightScheduleScreen = (props) => {

	const styles = getStyles();
	const [homeIndex, setHomeIndex] = useState(5);

	return (
		<View style={styles.mainContainer}>

			<View style={styles.headerCon}>
				<Spacer height={Platform.OS === 'ios' ? 50 : 20} />
				<Header isHeader1 label={"Fight schedule"} backPress={() => {
					props.navigation.dispatch(
						CommonActions.reset({
							index: 0,
							routes: [{ name: 'UtilityStack' }],
						}),
					);
				}} labelColor={themeColors.white} />
				<View style={{ marginStart: 16, marginTop: 16 }}>
					<AppLogoSvg2Component />
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.bodyContainer}>
					<Spacer height={25} />
					<View style={styles.flighCardView}>
						<View style={{ zIndex: 8000 }}>
							<CustomText body2 color={'grey'}>Departure</CustomText>
							<CustomDropDown
								options={[
									{ label: 'Departure 1', key: 1 },
									{ label: 'Departure 2', key: 2 },
									{ label: 'Departure 3', key: 3 },

								]}
								dropContStyle={{ width: Dimensions.get('window').width / 1.3, }}
								label={'Departure'}
								style={{
									height: 45,
									borderWidth: 0,
									width: Dimensions.get('window').width / 1.3,
								}}
							/>
						</View>
						<Spacer height={10} />
						<View style={{ zIndex: 6000 }}>
							<CustomText body2 color={'grey'}>Arrival</CustomText>
							<CustomDropDown
								options={[
									{ label: 'Arrival 1', key: 1 },
									{ label: 'Arrival 2', key: 2 },
									{ label: 'Arrival 3', key: 3 },

								]}
								dropContStyle={{ width: Dimensions.get('window').width / 1.3, }}
								label={'Arrival'}
								style={{
									height: 45,
									borderWidth: 0,
									width: Dimensions.get('window').width / 1.3,
								}}
							/>
						</View>
						<Spacer height={10} />
						<View style={{ zIndex: 5000 }}>
							<CustomText body2 color={'grey'}>Departure date</CustomText>
							<CustomDropDown
								options={[
									{ label: 'Monday 10:30 am', key: 1 },
									{ label: 'Tuesday 11:30 am', key: 2 },
									{ label: 'Wednesday 12:30 am', key: 3 },
								]}
								dropContStyle={{ width: Dimensions.get('window').width / 1.3, }}
								label={'Departure date'}
								style={{
									height: 45,
									borderWidth: 0,
									width: Dimensions.get('window').width / 1.3,
								}}
							/>
						</View>
						<Spacer height={10} />
						<View style={{ zIndex: 4000 }}>
							<CustomText body2 color={'grey'}>Airline</CustomText>
							<CustomDropDown
								options={[
									{ label: 'Qatar', key: 1 },
									{ label: 'Emirates', key: 2 },
									{ label: 'PIA', key: 3 },
									{ label: 'UAE', key: 4 },
								]}
								dropContStyle={{ width: Dimensions.get('window').width / 1.3, }}
								label={'Airline'}
								style={{
									height: 45,
									borderWidth: 0,
									width: Dimensions.get('window').width / 1.3,
								}}
							/>
						</View>
						<Spacer height={10} />
						<View style={{ zIndex: 3000 }}>
							<CustomText body2 color={'grey'}>Airport</CustomText>
							<CustomDropDown
								options={[
									{ label: 'Lahore', key: 1 },
									{ label: 'New York', key: 2 },
									{ label: 'India', key: 3 },
									{ label: 'Negeria˝', key: 4 },
								]}
								dropContStyle={{ width: Dimensions.get('window').width / 1.3, }}
								label={'Airport'}
								style={{
									height: 45,
									borderWidth: 0,
									width: Dimensions.get('window').width / 1.3,
								}}
							/>
						</View>
						<Spacer height={10} />
					</View>
					<Spacer height={100} />
					<View style={styles.btnContainer}>
						<ButtonComponent
							label={'Search flight schedule'}
							// loader={loading}
							onPress={() => {
								props.navigation.navigate("SeacrhFlightScreen")
							}}
							buttonTextColor={themeColors.white}
							buttonContainerStyle={styles.btnView}
						/>
					</View>
				</View>
				<Spacer height={200} />
			</ScrollView>
			<DraggableBottomSheet
				currentIndex={index => {
					RenderUtilityScreens(index, props.navigation)
					setHomeIndex(index)
				}}
				homeIndex={homeIndex}
			/>
		</View>
	);
};

export default FlightScheduleScreen;
