import { CommonActions } from '@react-navigation/native'
import { Center, ChevronLeftIcon, Divider, Row, SearchIcon, Slider, VStack } from 'native-base'
import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, Platform, ScrollView, TouchableOpacity, View } from 'react-native'

import { CrossSVGComponent, IndicatorMapLogoSVGComponent, MapIndicatorSVGComponent, MapMenuSVGComponent } from '../../../../assets/svgs'
import ButtonComponent from '../../../../components/ButtonComponent'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import MapBottomSheet from '../../../../components/common/MapBottomSheet'
import { themeColors } from '../../../../config/colors'
import { IMAGES } from '../../../../utils/imagesAssets'
import getStyles from './styles'

const FlightNetworkRoadMapScreen = (props) => {

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
	const styles = getStyles()
	const [sliderValue, setSliderValue] = useState(0);

	const toggleBottomSheet = () => {
		setBottomSheetVisible(!isBottomSheetVisible);
	};

	const handleSliderChange = (value) => {
		setSliderValue(value);
	};

	return (
		<ImageBackground source={IMAGES.map} style={{
			width: Dimensions.get('window').width,
			height: Dimensions.get('window').height,
		}}>

			<MapBottomSheet marginTop={1.55}
				isVisible={isBottomSheetVisible}
				closeModal={() => {
					setBottomSheetVisible(false)
				}}
			>
				<Spacer height={20} />
				<VStack space={2}>
					{['London', "Vietem"].map((item, index) => {
						return <Row
							justifyContent={'space-between'}
							alignItems={'center'}
							borderRadius={17}
							borderWidth={1}
							borderColor={'#FAC45E'}
							style={{ paddingHorizontal: 16 }}
						>
							<CustomText bold color={themeColors.utilityPrime}>{item}</CustomText>
							<Row space={2} alignItems={'center'} height={39} >
								<CrossSVGComponent />
								<IndicatorMapLogoSVGComponent />
							</Row>
						</Row>
					})}
					<ButtonComponent
						label={'Search'}
						// loader={loading}
						onPress={() => {
							props.navigation.navigate("SearchMapScreen")
							setBottomSheetVisible(false)
						}}
						buttonTextColor={themeColors.white}
						buttonContainerStyle={styles.searchBtn}
					/>
					<Row justifyContent={'center'} alignItems={'center'} space={10}>
						<VStack space={2}>
							<CustomText bold h4 color={themeColors.authPrimary}>LHR</CustomText>
							<CustomText bold body color={themeColors.black}>London</CustomText>
							<CustomText body2 color={themeColors.black}>10:04am</CustomText>
						</VStack>
						<VStack>
							<Slider defaultValue={50} colorScheme={'blue'} maxW="100" w="100">
								<Slider.Track>
									<Slider.FilledTrack />
								</Slider.Track>
							</Slider>
							<Center>
								<CustomText body2 color={"#FAC45E"}>3,442 ml</CustomText>
							</Center>
						</VStack>
						<VStack space={2}>
							<CustomText bold h4 color={themeColors.authPrimary}>VNA</CustomText>
							<CustomText bold body color={themeColors.black}>Vietnam</CustomText>
							<CustomText body2 color={themeColors.black}>10:04am</CustomText>
						</VStack>
					</Row>
				</VStack>
			</MapBottomSheet>

			<Row justifyContent={'space-between'} width={Dimensions.get('window').width} style={{ paddingHorizontal: 16, marginTop: Platform.OS === 'ios' ? 60 : 20 }}>
				<TouchableOpacity onPress={() => {
					props.navigation.dispatch(
						CommonActions.reset({
							index: 0,
							routes: [{ name: 'UtilityStack' }],
						}),
					);
				}}>
					<Center style={styles.headerSvgView}>
						<ChevronLeftIcon color={themeColors.utilityPrime} />
					</Center>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {
					// props.navigation.goBack()
				}}>
					<Center style={styles.headerSvgView}>
						<MapMenuSVGComponent color={themeColors.utilityPrime} />
					</Center>
				</TouchableOpacity>
			</Row>
			<Center position={'absolute'} style={{ alignSelf: 'center', top: 200 }}>
				<Image style={{ width: 30, height: 30, backgroundColor: 'transparent', borderWidth: 0 }} source={IMAGES.Indicator} />
			</Center>
			<VStack style={styles.fabContainer} space={4}>
				<TouchableOpacity onPress={() => {
					props.navigation.navigate("AirPortsListScreen")
				}}>
					<Center style={styles.fabButton}>
						<MapIndicatorSVGComponent color={themeColors.utilityPrime} />
					</Center>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {
					setBottomSheetVisible(true)
				}}>
					<Center style={styles.fabButton}>
						<SearchIcon color={themeColors.utilityPrime} size={22} />
					</Center>
				</TouchableOpacity>

			</VStack>
			<View style={styles.mainContainer}>
				<Spacer height={10} />
				<Divider alignSelf={'center'} height={1} width={60} borderRadius={100} _light={{
					bg: themeColors.grey
				}} />
				<Spacer height={16} />
				<Row style={{ paddingHorizontal: 16, alignItems: 'center' }} space={1}>
					<MapIndicatorSVGComponent stroke={themeColors.black} />
					<CustomText bold body2>6391 Elgin St. Celina, Delaware 10299</CustomText>
				</Row>
				<Spacer height={20} />
				<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 16 }}>
					{["Airport Maps", "Taxi", "Save", "Uber"].map((item, index) => {
						return (
							<TouchableOpacity onPress={() => setSelectedIndex(index)}>
								<Center style={selectedIndex === index ? styles.activeItemView : styles.itemView}>
									<CustomText bold body2 color={selectedIndex === index ? themeColors.white : themeColors.black}>{item}</CustomText>
								</Center>
							</TouchableOpacity>
						)
					})}
					<Spacer height={50} />
				</ScrollView>
				<Spacer height={20} />
			</View>
		</ImageBackground>
	)
}

export default FlightNetworkRoadMapScreen


