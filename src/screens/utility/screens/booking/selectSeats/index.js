import React, { useCallback, useState } from 'react'
import { Platform, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { Box, Center, ChevronDownIcon, ChevronLeftIcon, CloseIcon, Divider, Menu, Row, VStack } from 'native-base'
import WireLessSVGComponent from '../../../../../assets/svgs/WirelessSvg'
import AeroplaneSeatPanSVGComponent from '../../../../../assets/svgs/aeroplaneSeatPlanSvg'
import SeatSVGComponent from '../../../../../assets/svgs/seatSvg'
import SelectedSeatSVGComponent from '../../../../../assets/svgs/selectedSeatSvg'
import SmileSVGComponent from '../../../../../assets/svgs/smileSvg'
import SwitchSVGComponent from '../../../../../assets/svgs/switchSvg'
import ButtonComponent from '../../../../../components/ButtonComponent'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import { themeColors } from '../../../../../config/colors'
import { seatPlanData } from '../../../../../utils/helper'
import getStyles from './styles'

const SelectSeats = (props) => {

    const styles = getStyles()
    const [selectedItem, setSelectedItem] = useState("Economy");

    const handleSelect = (item) => {
        setSelectedItem(item);
        console.log('Selected Item:', item);
    };

    const setColor = useCallback((index) => {
        if (index % 2 === 0) {
            return "#17C954"
        } else if (index % 5 === 0) {
            return "#FEB027"
        } else {
            return "#DDDDDD"
        }
    })
    const setSeatPlan = useCallback((index) => {
        if (index === 1) {
            return "#17C954"
        } else if (index === 2) {
            return "#FEB027"
        } else {
            return "#DDDDDD"
        }
    })

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView />
            <Spacer height={20} />
            <Row justifyContent={'space-between'} style={{ paddingHorizontal: 30 }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <ChevronLeftIcon color={'black'} size={22} />
                </TouchableOpacity>
                <CustomText body bold color='black'>Choose a flight</CustomText>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <CloseIcon color={'black'} />
                </TouchableOpacity>
            </Row>
            <Spacer height={70} />
            <Center>
                <AeroplaneSeatPanSVGComponent />
            </Center>
            <View style={styles.aeroPlaneContext}>
                <Spacer height={Platform.OS === 'ios' ? 100 : 35} />
                <Center>
                    <CustomText body2 color={'grey'}>TYPE</CustomText>
                    <Spacer height={4} />
                    <TouchableOpacity onPress={() => { }}>
                        <Row>
                            <CustomText body2 bold>{`${selectedItem.toUpperCase()}`}</CustomText>

                            <Box alignItems="center">
                                <Menu w="190" marginRight={20} trigger={triggerProps => {
                                    return <Pressable {...triggerProps}>
                                        <ChevronDownIcon color={'#000'} size={4} />
                                    </Pressable>;
                                }}>
                                    <Menu.Group title="Type" >
                                        <Menu.Item onPress={() => handleSelect('Business')}>Business</Menu.Item>
                                        <Menu.Item onPress={() => handleSelect('Economy')}>Economy</Menu.Item>
                                        <Menu.Item onPress={() => handleSelect('First Class')}>First Class</Menu.Item>
                                    </Menu.Group>

                                </Menu>
                            </Box>
                        </Row>
                    </TouchableOpacity>
                </Center>
                <Spacer height={10} />
                <Row justifyContent={'center'} >
                    {["Not Available", "Available", "Selected"].map((val, index) => {
                        return (
                            <VStack key={index} space={1}>
                                <Center>
                                    <View style={[styles.flightIndicator, { backgroundColor: setSeatPlan(index) }]} />
                                    <Text style={{ width: 50, fontSize: 10, textAlign: "center" }}>{val}</Text>
                                </Center>
                            </VStack>
                        )
                    })}
                </Row>
                <Spacer height={10} />
                <Row justifyContent={'center'}>
                    <Row space={3} >
                        {["A", "B", "C",].map((val, index) => {
                            return (
                                <VStack key={index} >
                                    <Center>
                                        <CustomText bold body2 style={{ textAlign: "center" }}>{val}</CustomText>
                                    </Center>
                                </VStack>
                            )
                        })}
                    </Row>
                    <Spacer width={60} />
                    <Row space={3}>
                        {["E", "F", "G",].map((val, index) => {
                            return (
                                <VStack key={index} space={1}>
                                    <Center>
                                        <CustomText bold body2 style={{ textAlign: "center" }}>{val}</CustomText>
                                    </Center>
                                </VStack>
                            )
                        })}
                    </Row>
                </Row>
                <Spacer height={16} />
                <Row justifyContent={'center'}>
                    <Row width={60} backgroundColor={'red'} flexWrap={'wrap'} space={.5}>
                        {seatPlanData.map((val, index) => {
                            return (
                                <VStack key={index} >
                                    <TouchableOpacity>
                                        <Center>
                                            <SeatSVGComponent stroke={setColor(index)} />
                                        </Center>
                                    </TouchableOpacity>
                                </VStack>
                            )
                        })}
                    </Row>
                    <Spacer width={18} />
                    <VStack>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val, index) => {
                            return (
                                <VStack key={index} space={.5}>
                                    <Center>
                                        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>{val}</Text>
                                    </Center>
                                </VStack>
                            )
                        })}
                    </VStack>
                    <Spacer width={18} />
                    <Row width={60} backgroundColor={'red'} flexWrap={'wrap'} space={.5}>
                        {seatPlanData.map((val, index) => {
                            return (
                                <VStack key={index} >
                                    <TouchableOpacity>
                                        <Center>
                                            <SeatSVGComponent stroke={setColor(index)} />
                                        </Center>
                                    </TouchableOpacity>
                                </VStack>
                            )
                        })}
                    </Row>
                </Row>
                <VStack justifyContent={'center'}>
                    <Divider />
                    <Spacer height={12} />
                    <Row justifyContent={'center'}>
                        <Row alignItems={'center'}>
                            <SelectedSeatSVGComponent />
                            <Text style={{ fontSize: 10, color: "#AAAAAA" }}>Selected Seat</Text>
                        </Row>
                        <Spacer width={35} />
                        <Row space={1}>
                            <SwitchSVGComponent />
                            <WireLessSVGComponent />
                            <SmileSVGComponent />
                        </Row>
                    </Row>
                </VStack>
                <Spacer height={12} />
                <Center>
                    <ButtonComponent
                        label={'Next Flight'}
                        // loader={loading}
                        onPress={() => {
                            props.navigation.navigate("PaymentScreen")
                        }}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={{ backgroundColor: themeColors.utilityPrime, width: 160, height: 33, padding: 0 }}
                    />
                </Center>
            </View>
        </View>
    )
}
export default SelectSeats