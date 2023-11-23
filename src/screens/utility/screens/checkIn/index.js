
import React, { useState } from 'react';
import { Dimensions, Platform, ScrollView, View } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { Center, CheckCircleIcon } from 'native-base';
import { AppLogoSvg2Component } from '../../../../assets/svgs';
import ButtonComponent from '../../../../components/ButtonComponent';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import CustomDropDown from '../../../../components/common/CustomDropDown';
import Header from '../../../../components/common/Header';
import InputDropDownField from '../../../../components/common/InputDropDownField';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import CustomModal from '../../../../components/customModal';
import { themeColors } from '../../../../config/colors';
import { RenderUtilityScreens } from '../../../../utils/helper';
import getStyles from './styles';

const CheckInScreen = (props) => {

	const styles = getStyles();
	const [isCheckedIn, setIsCheckedIn] = useState(false)
	const [homeIndex, setHomeIndex] = useState(3);

	return (
		<View style={styles.mainContainer}>
			<View style={styles.headerCon}>
				<Spacer height={Platform.OS === 'ios' ? 50 : 20} />
				<Header isHeader1 label={"Check-in"} backPress={() => {
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
			<ScrollView>
				<View style={styles.bodyContainer}>
					<Spacer height={25} />
					<View style={styles.flighCardView}>
						<CustomText body2 color={themeColors.grey} bold>Web Checkin in available 24 to 1 hour before flight departure</CustomText>
						<Spacer height={10} />
						<View style={{ zIndex: 999 }}>
							<CustomText body2 color={'grey'}>Check-in by</CustomText>
							<CustomDropDown
								options={[
									{ label: 'By code', key: 1 },
									{ label: 'By Upcoming flight', key: 2 },
								]}
								dropContStyle={{ width: Dimensions.get('window').width / 1.3, }}
								label={'Check-in by'}
								style={{
									height: 45,
									borderWidth: 0,
									width: Dimensions.get('window').width / 1.3,
								}}
							/>
						</View>
						<Spacer height={6} />
						<InputDropDownField placeholder={"Reservation code "} label={"Reservation code "} isArrowDownSvg={true} />
						<Spacer height={6} />
						<InputDropDownField placeholder={"Last/Family name"} label={"Last/Family name"} isArrowDownSvg={true} />
						<Spacer height={6} />
						<InputDropDownField placeholder={"Departure"} label={"Departure"} isArrowDownSvg={true} />
					</View>
					<Spacer height={100} />
					<View style={styles.btnContainer}>
						<ButtonComponent
							label={'Check-in'}
							onPress={() => {
								setIsCheckedIn(true)
								setTimeout(() => {
									setIsCheckedIn(false)
									props.navigation.dispatch(
										CommonActions.reset({
											index: 0,
											routes: [{ name: 'UtilityStack' }],
										}),
									);
								}, 2000);
							}}
							buttonTextColor={themeColors.white}
							buttonContainerStyle={styles.btnView}
						/>
					</View>
					<CustomModal isVisible={isCheckedIn}>
						<View style={{ width: Dimensions.get('window').width / 2, marginHorizontal: 16 }}>
							<Center>
								<CheckCircleIcon color={'#008000'} size={22} />
								<Spacer height={15} />
								<CustomText color='black' bold >Successfully Checked-In</CustomText>
							</Center>
						</View>
					</CustomModal>
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

export default CheckInScreen;

