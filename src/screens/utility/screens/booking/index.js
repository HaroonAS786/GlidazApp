import { CommonActions } from '@react-navigation/native';
import { AddIcon, Checkbox, ChevronDownIcon, Column, Divider, Input, Row, VStack } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

import RefreshSVGComponent from '../../../../assets/svgs/RefreshSvg';
import CircleSVGComponent from '../../../../assets/svgs/circleSvg';
import EditSVGComponent from '../../../../assets/svgs/editSvg';
import LineSVGComponent from '../../../../assets/svgs/lineSvg';
import ButtonComponent from '../../../../components/ButtonComponent';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import { themeColors } from '../../../../config/colors';
import { RenderUtilityScreens } from '../../../../utils/helper';
import { IMAGES } from '../../../../utils/imagesAssets';
import BookingHeader from './components/Header';
import getStyles from './styles';

const BookingScreen = (props) => {
	const styles = getStyles();
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [priceIndex, setPriceIndex] = useState(0)
	const [flights, setFlights] = useState([0])
	const [screenIndex, setScreenIndex] = useState(1);
	const [homeIndex, setHomeIndex] = useState(1);

	const addMoreFlight = (val) => {
		let copyFlights = [...flights]
		copyFlights.push(val)
		setFlights(copyFlights)
	}

	return (
		<ImageBackground style={styles.mainContainer} source={IMAGES.bookingBg}>
			<SafeAreaView />
			<Spacer height={20} />
			<BookingHeader label={"Search Flights"} backPress={() => {
				props.navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: 'UtilityStack' }],
					}),
				);
			}} />
			<ScrollView >
				<Spacer height={25} />
				<Row style={styles.headerView}>
					<TouchableOpacity style={selectedIndex === 0 ? styles.activeRoundTripLabel : styles.roundTripLabel} onPress={() => {
						setSelectedIndex(0)
					}}>
						<CustomText color={'white'} >Round Trip</CustomText>
					</TouchableOpacity>
					<TouchableOpacity style={selectedIndex === 1 ? styles.activeOneWayLabel : styles.oneWayLabel} onPress={() => {
						setSelectedIndex(1)
					}}>
						<CustomText color={'white'}  >One Way</CustomText>
					</TouchableOpacity>
					<TouchableOpacity style={selectedIndex === 2 ? styles.activeMultipleLabel : styles.MultipleLabel} onPress={() => {
						setSelectedIndex(2)
					}}>
						<CustomText color={'white'}  >Multiple</CustomText>
					</TouchableOpacity>
				</Row>
				<Spacer height={25} />
				{selectedIndex === 2 ?
					<VStack>
						{flights.map((val, index) =>
							<View style={styles.roundTripContainer}>
								<Spacer width={25} />

								<VStack flex={1}>
									<VStack space={.5}>
										<CustomText body2 color={'grey'}  >FROM</CustomText>
										<CustomText h3 color={'white'} bold >LHR</CustomText>
										<CustomText color={'white'}  >London</CustomText>
										<View style={styles.editSvg}>
											<EditSVGComponent />
										</View>
									</VStack>
									<Spacer height={25} />
									<VStack space={.5}>
										<CustomText body2 color={'grey'}  >FROM</CustomText>
										<CustomText h3 color={'white'} bold >LHR</CustomText>
										<CustomText color={'white'}  >London</CustomText>
										<View style={styles.editSvg}>
											<EditSVGComponent />
										</View>
									</VStack>
								</VStack>
								<VStack flex={1} alignItems={'center'}>
									<CustomText body2 bold color={'#FAC45E'} >{`Flight`}</CustomText>
									<Spacer height={12} />
									<CircleSVGComponent />
									<LineSVGComponent />
									<RefreshSVGComponent />
									<LineSVGComponent />
									<CircleSVGComponent />
								</VStack>
								<Spacer width={25} />
								<VStack flex={1} alignItems={'center'} space={6}>
									<TouchableOpacity>
										<Column alignItems={"center"} space={1} style={{ borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 20 }}>
											<AddIcon color={'white'} />
											<CustomText body color={'white'}  >Departure</CustomText>
										</Column>
									</TouchableOpacity>
									<TouchableOpacity>
										<Column alignItems={"center"} space={1} style={{ borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 20 }}>
											<AddIcon color={'white'} />
											<CustomText body color={'white'}  >Departure</CustomText>
										</Column>
									</TouchableOpacity>
								</VStack>
								<Spacer width={16} />
							</View >)}
						<Spacer height={25} />
						<TouchableOpacity onPress={() => {
							var count = 0;
							count++
							if (count) {
								addMoreFlight(count)
							}
						}}>
							<Row justifyContent={'center'} space={4}>
								<View style={{ width: 20, height: 20, borderRadius: 100, borderWidth: 1.2, borderColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
									<AddIcon color={'#E0E3EF'} size={14} />
								</View>
								<CustomText body2 color={'#E0E3EF'}  >Add more flight</CustomText>
							</Row>
						</TouchableOpacity>
					</VStack> :
					<View style={styles.roundTripContainer}>
						<Spacer width={25} />
						<VStack flex={1}>
							<VStack space={.5}>
								<CustomText body2 color={'grey'}  >FROM</CustomText>
								<CustomText h3 color={'white'} bold >LHR</CustomText>
								<CustomText color={'white'}  >London</CustomText>
								<View style={styles.editSvg}>
									<EditSVGComponent />
								</View>
							</VStack>
							<Spacer height={25} />
							<VStack space={.5}>
								<CustomText body2 color={'grey'}  >FROM</CustomText>
								<CustomText h3 color={'white'} bold >LHR</CustomText>
								<CustomText color={'white'}  >London</CustomText>
								<View style={styles.editSvg}>
									<EditSVGComponent />
								</View>
							</VStack>
						</VStack>
						<VStack flex={1} alignItems={'center'}>
							<Spacer height={6} />
							<CircleSVGComponent />
							<LineSVGComponent />
							<RefreshSVGComponent />
							<LineSVGComponent />
							<CircleSVGComponent />
						</VStack>
						<Spacer width={25} />
						<VStack flex={1} alignItems={'center'} space={6}>
							<TouchableOpacity>
								<Column alignItems={"center"} space={1} style={{ borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 20 }}>
									<AddIcon color={'white'} />
									<CustomText body color={'white'}  >Departure</CustomText>
								</Column>
							</TouchableOpacity>
							<TouchableOpacity>
								<Column alignItems={"center"} space={1} style={{ borderWidth: 1, borderColor: 'white', padding: 10, borderRadius: 20 }}>
									<AddIcon color={'white'} />
									<CustomText body color={'white'}  >Departure</CustomText>
								</Column>
							</TouchableOpacity>
						</VStack>
						<Spacer width={16} />
					</View>
				}
				<Spacer height={25} />
				<View style={styles.footer}>
					<VStack>
						<Row justifyContent={"space-between"}>
							<Input variant={'unstyled'} placeholder='Show in Price' placeholderTextColor={"white"} color={'white'} width={200} fontSize={18} />
							<Row style={styles.cashMilesView}>
								{["Cash", "Miles"].map((val, index) => (
									<TouchableOpacity style={{
										backgroundColor: priceIndex === index ? "#FAC45E" : "transparent",
										flex: 1,
										paddingHorizontal: 2
									}} onPress={() => {
										setPriceIndex(index)
									}}>
										<CustomText h7 color={'white'} >{val}</CustomText>
									</TouchableOpacity>
								))}
							</Row>
						</Row>
						<Divider _light={{
							bg: themeColors.grey
						}} />
					</VStack>
					<Spacer height={12} />
					<VStack space={1}>
						<CustomText bold body color={themeColors.grey}>Passenger</CustomText>
						<Row justifyContent={'space-between'}>
							<Row space={2}>
								<CustomText h3 bold color={themeColors.white}>01</CustomText>
								<Column space={.5}>
									<CustomText body color={themeColors.white}>Passenger</CustomText>
									<CustomText body2 color={themeColors.white}>1 adult</CustomText>
								</Column>
							</Row>
							<ChevronDownIcon color={'white'} size={18} />
						</Row>
					</VStack>
					<Spacer height={25} />
					<VStack>
						<CustomText bold body color={themeColors.white}>Promo code (Optional)</CustomText>
						<Spacer height={12} />
						<Input
							variant={'underlined'}
							placeholder='Promo Code'
							placeholderTextColor={"white"}
							color={'white'}
							style={{ paddingHorizontal: 4 }}
						/>
						<Spacer height={12} />
						<Checkbox value="two" color={'white'} colorScheme={'yellow'}>
							<CustomText body color={themeColors.white}>Show refundable fares</CustomText>
						</Checkbox>
						<Spacer height={60} />
						<ButtonComponent
							label={'Seacrh'}
							// loader={loading}
							onPress={() => {
								props.navigation.navigate("ChooseDate")
							}}
							buttonTextColor={themeColors.white}
							buttonContainerStyle={{ backgroundColor: "#FAC45E" }}
						/>
						<Spacer height={25} />
					</VStack>
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
		</ImageBackground >
	);
};

export default BookingScreen;
