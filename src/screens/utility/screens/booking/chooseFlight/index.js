import { Center, ChevronLeftIcon, ChevronRightIcon, CloseIcon, Column, Divider, Row, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Dimensions, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import ChooseFlightSVGComponent from '../../../../../assets/svgs/chooseFlightLogoSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import HorizontalCustomCalendar from '../../../components/HorizontalCalender'
import getStyles from './styles'
import { themeColors } from '../../../../../config/colors'
import ChooseFlightCardSVGComponent from '../../../../../assets/svgs/ChooseFlightCardSvg'
import GarudaSVGComponent from '../../../../../assets/svgs/garudaSvg'
import BusinessClassSVGComponent from '../../../../../assets/svgs/businessClassSvg'
import SortSVGComponent from '../../../../../assets/svgs/sortSvg'
import { FilterSVGComponent } from '../../../../../assets/svgs'

const ChooseFlight = (props) => {

    const styles = getStyles()
    const [selectedDate, setSelectedDate] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSelectedDate(false)
        }, 5000)

    }, [selectedDate])

    return (
        <View style={styles.mainContainer}>

            <View style={styles.headerView}>
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
                <View style={{ height: 100 }}>
                    <HorizontalCustomCalendar
                        onDayPress={() => setSelectedDate(true)}
                    />
                </View>
                <Row style={{ paddingHorizontal: 16 }} space={2}>
                    <ChooseFlightSVGComponent />
                    <Column>
                        <Row alignItems={'center'} space={2}>
                            <CustomText body> Vietnam </CustomText>
                            <ChevronRightIcon size={14} color={"#D2A53A"} />
                            <CustomText body>London</CustomText>
                        </Row>
                        <CustomText body2> 1 adult </CustomText>
                    </Column>
                </Row>
                <Spacer height={20} />
                <View style={{ paddingHorizontal: 16 }}>
                    <CustomText body2>
                        Important note: Price below include taxes and fees. Check for information on baggage policy
                        <CustomText body2 bold color={themeColors.utilityPrime} style={{ textDecorationLine: "underline", }}> here</CustomText>
                    </CustomText>
                </View>
            </View>
            <View style={styles.footer}>
                <Spacer height={20} />
                <Row justifyContent={'space-between'}>
                    <CustomText body bold color={themeColors.white}>Search Result</CustomText>
                    <CustomText body2 color={"#BCBCBC"}>132 Result</CustomText>
                </Row>
                <Spacer height={14} />
                <Row space={2}>
                    {["$100-$200", "Free Protection", "Best Selller"].map((val, index) => {
                        return (
                            <TouchableOpacity>
                                <Center style={{ backgroundColor: "#E7ECF3", padding: 6, borderRadius: 10 }}>
                                    <CustomText body2 color={"#6B7386"}>{val}</CustomText>
                                </Center>
                            </TouchableOpacity>
                        )
                    })}
                </Row>
                <Spacer height={14} />
                {selectedDate &&
                    <ActivityIndicator size={'large'} color={themeColors.white} />
                }
                <ScrollView showsVerticalScrollIndicator={false}>
                    {!selectedDate && <>
                        {[0, 1, 2].map((val, ind) => <View style={{ height: Dimensions.get('window').height * 0.25, alignSelf: 'center' }}>
                            <Spacer height={12} />
                            <TouchableOpacity activeOpacity={0.6} onPress={() => {
                                props.navigation.navigate("SelectSeats")
                            }}>
                                <ChooseFlightCardSVGComponent />
                            </TouchableOpacity>
                            <Row
                                style={{ position: 'absolute', left: 0, right: 0, top: 22, paddingHorizontal: 25 }}
                                justifyContent={'space-between'}>
                                <GarudaSVGComponent />
                                <View style={{ backgroundColor: "rgba(18, 179, 168, 0.2)", borderRadius: 100, padding: 5, opacity: 1 }}>
                                    <CustomText regular body2 color={"#12B3A8"}>Recommended</CustomText>
                                </View>
                            </Row>
                            <Row
                                style={{ position: 'absolute', left: 0, right: 0, top: 60, paddingHorizontal: 25 }}
                                justifyContent={'space-between'}>

                                <VStack space={2.5}>
                                    <CustomText body2 color={"#6B7386"}>Semarang, SRG</CustomText>
                                    <CustomText h2 bold body2 color={"#000"}>SRG</CustomText>
                                    <CustomText body2 color={"#6B7386"}>12:20 AM</CustomText>
                                </VStack>
                                <VStack space={9}>
                                    <CustomText body2 color={"#000"}>15h 40m</CustomText>
                                    <CustomText body2 color={"#000"}>2 Stop</CustomText>
                                </VStack>
                                <VStack space={2.5} alignItems={'flex-end'}>
                                    <CustomText body2 color={"#6B7386"}>Tokyo, TYO</CustomText>
                                    <CustomText h2 bold body2 color={"#000"}>TYO</CustomText>
                                    <CustomText body2 color={"#6B7386"}>106.00 AM</CustomText>
                                </VStack>
                            </Row>
                            <Row
                                style={{ position: 'absolute', left: 0, right: 0, top: 170, paddingHorizontal: 25 }}
                                justifyContent={'space-between'}>

                                <Row space={2.5}>
                                    <BusinessClassSVGComponent />
                                    <CustomText h2 bold body2 color={"#000"}>Business Class</CustomText>

                                </Row>
                                <Row space={1}>
                                    <CustomText bold body color={"#12B3A8"}>$167.00</CustomText>
                                    <CustomText body2 color={"#6B7386"} style={{ marginTop: 4 }}>$200</CustomText>
                                </Row>
                            </Row>
                        </View>)}
                    </>
                    }
                    <Spacer height={120} />
                </ScrollView>
                <Row
                    justifyContent={'space-between'}
                    alignSelf={'center'}
                    style={styles.sortFilterView}>
                    <TouchableOpacity>
                        <Row alignItems={'center'} space={2}>
                            <SortSVGComponent />
                            <CustomText body bold color={"#000"}>Sort</CustomText>
                        </Row>
                    </TouchableOpacity>
                    <Divider orientation='vertical' />
                    <TouchableOpacity>
                        <Row alignItems={'center'} space={3}>
                            <FilterSVGComponent />
                            <CustomText body bold color={"#000"}>Filter</CustomText>
                        </Row>
                    </TouchableOpacity>
                </Row>
            </View>
        </View>
    )
}

export default ChooseFlight