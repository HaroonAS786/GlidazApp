import { CommonActions } from '@react-navigation/native';
import {
	Avatar,
	ChevronDownIcon,
	CloseIcon,
	Column,
	Row
} from 'native-base';
import React, { useState } from 'react';
import {
	Dimensions,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	View
} from 'react-native';

import { CustomerServiceSVGComponent, MessageSVGComponent } from '../../../../assets/svgs';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import { themeColors } from '../../../../config/colors';
import { MenuData, RenderUtilityScreens } from '../../../../utils/helper';
import MenuCard from './components';
import getStyles from './styles';
import getStyles from './styles';

const SettingScreen = props => {
	const styles = getStyles();
	const [homeIndex, setHomeIndex] = useState(10);
	return (

		<>
			<ScrollView>
				<SafeAreaView style={styles.mainContainer}>
					<Spacer height={25} />
					<Row
						justifyContent={'space-between'}
						width={Dimensions.get('window').width}
						style={{ paddingHorizontal: 25 }}>
						<Column>
							<CustomText bold h4 color={themeColors.black}>
								Good morning
							</CustomText>
							<Spacer height={6} />
							<Row alignItems={'center'} space="1">
								<Avatar size={'xs'}>ODI</Avatar>
								<CustomText
									regular
									h7
									body
									color={themeColors.black}
									style={{ textAlign: 'center' }}>
									Mr. Oni Ade
								</CustomText>
								<ChevronDownIcon />
							</Row>
						</Column>
						<TouchableOpacity onPress={() => {
							props.navigation.dispatch(
								CommonActions.reset({
									index: 0,
									routes: [{ name: 'UtilityStack' }],
								}),
							);
						}}>
							<Spacer height={10} />
							<CloseIcon color={themeColors.black} />
						</TouchableOpacity>

					</Row>
					<Spacer height={40} />
					{MenuData.map((value, index) => {
						return <MenuCard key={index} item={value} index={index} />
					})}
					<Spacer height={40} />
					<Row alignItems={'center'} space={10}>
						<Column alignItems={'center'} space={1}>
							<View style={styles.svgView}>
								<MessageSVGComponent />
							</View>
							<CustomText bold h7 body>Chat with us</CustomText>
						</Column>
						<Column alignItems={'center'} space={1}>
							<View style={styles.svgView}>
								<CustomerServiceSVGComponent />
							</View>
							<CustomText bold h7 body>Customer Service</CustomText>
						</Column>
					</Row>
					<Spacer height={150} />
				</SafeAreaView>
			</ScrollView>
			<DraggableBottomSheet
				currentIndex={index => {
					RenderUtilityScreens(index, props.navigation)
					setHomeIndex(index)
				}}
				homeIndex={homeIndex}
			/>
		</>

	);
};

export default SettingScreen;

