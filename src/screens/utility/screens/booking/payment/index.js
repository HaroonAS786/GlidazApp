import { ArrowBackIcon, Center, ChevronDownIcon, ChevronRightIcon, Input, Row, VStack } from 'native-base'
import React from 'react'
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import CalenderSVGComponent from '../../../../../assets/svgs/calenderSvg'
import HourSVGComponent from '../../../../../assets/svgs/hourSvg'
import MasterCardSVGComponent from '../../../../../assets/svgs/masterCardSvg.js'
import PaymentProceedSVGComponent from '../../../../../assets/svgs/paymentDoneSvg'
import PromoCodeSVGComponent from '../../../../../assets/svgs/promoCodeSvg'
import TimeSVGComponent from '../../../../../assets/svgs/timeSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import getStyles from './styles'

const PaymentCompletedScreen = (props) => {

    const styles = getStyles()

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerView}>
                <SafeAreaView />
                <Spacer height={20} />
                <Row justifyContent={'space-between'} style={{ paddingHorizontal: 30 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Center style={{ width: 56, height: 37, backgroundColor: 'rgba(13, 22, 52, 0.05)', borderRadius: 16 }}>
                            <ArrowBackIcon />
                        </Center>
                    </TouchableOpacity>
                </Row>
                <Spacer height={20} />
                <View style={{ paddingHorizontal: 25 }}>
                    <CustomText body bold>Complete Your Payment</CustomText>
                </View>
            </View>
            <Spacer height={16} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paymentCard}>
                    <Spacer height={6} />
                    <Row justifyContent={'space-between'} style={{ paddingHorizontal: 12 }}>
                        <CustomText body2 >Complete Payment in</CustomText>
                        <CustomText body2 bold color={"#FF4E4E"}>02:11:45</CustomText>
                    </Row>
                    <Spacer height={16} />
                    <View style={styles.paymentCardChild}>
                        <Spacer height={12} />
                        <Center>
                            <Row alignItems={'center'} space={1}>
                                <CustomText bold body >VNA</CustomText>
                                <ChevronRightIcon size={14} color={'#0284C7'} />
                                <CustomText bold body >LHR</CustomText>
                            </Row>
                            <Spacer height={4} />
                            <Row space={2}>
                                <VStack>
                                    <Row alignItems={'center'} space={1}>
                                        <CalenderSVGComponent />
                                        <Text style={{ fontSize: 12, color: "#808080" }} >Tue, 27 Oct</Text>
                                    </Row>
                                </VStack>
                                <VStack>
                                    <Row alignItems={'center'} space={1}>
                                        <TimeSVGComponent />
                                        <Text style={{ fontSize: 12, color: "#808080" }} >06.00 PM</Text>
                                    </Row>
                                </VStack>
                            </Row>

                        </Center>
                        <Spacer height={4} />
                        <Row alignItems={'center'} space={1} justifyContent={'flex-start'} style={{ marginStart: Platform.OS === 'ios' ? 76 : 80 }}>
                            <HourSVGComponent />
                            <Text style={{ fontSize: 12, color: "#808080" }} >1 HOUR</Text>
                        </Row>
                    </View>
                </View>
                <Spacer height={16} />
                <VStack>
                    <View style={{ paddingHorizontal: 25 }}>
                        <CustomText body bold>Payment Method</CustomText>
                    </View>
                    <Spacer height={16} />
                    <Row justifyContent={'space-between'} style={styles.paymentView}>
                        <Row space={2}>
                            <MasterCardSVGComponent />
                            <VStack>
                                <CustomText body >Gopay</CustomText>
                                <CustomText body color={"#808080"}>Balance : $310</CustomText>
                            </VStack>
                        </Row>
                        <TouchableOpacity>
                            <CustomText body color={"#0284C7"}>Change</CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={16} />
                    <VStack style={{ paddingHorizontal: 25 }}>
                        <CustomText body bold color={"#0D1634"}>Add Discount</CustomText>
                        <CustomText body2 color={"#808080"}>*You Have 1 Available Coupon</CustomText>
                    </VStack>
                    <Spacer height={16} />
                    <Row style={styles.promoCodeContainer}>
                        <Row space={1} alignItems={'center'}>
                            <Spacer width={6} />
                            <PromoCodeSVGComponent />
                            <Input placeholder='Add Coupon' variant={'unstyled'} width={150} />
                        </Row>
                        <Row space={3} style={styles.promoCodeChildContainer}>

                            <CustomText body2 color={"white"}>Add Coupon</CustomText>
                            <ChevronRightIcon size={22} color="white" />
                        </Row>
                    </Row>
                </VStack>
                <Spacer height={210} />
                <VStack style={styles.footerView}>
                    <Row justifyContent={'space-between'} alignItems={'center'}>
                        <VStack>
                            <Row alignItems={'center'}>
                                <CustomText body2 color={"#808080"}>Subtotal</CustomText>
                                <ChevronDownIcon color={'#0284C7'} size={3} />
                            </Row>
                            <CustomText h4 bold color={"#000"}>$600</CustomText>
                        </VStack>
                        <TouchableOpacity style={styles.proceedBtn} onPress={() => {
                            props.navigation.navigate("PasscodeScreen")
                        }}>
                            <Row alignItems={'center'} justifyContent={'center'} space={1}>
                                <CustomText body2 color={"#fff"}>Proceed The Payment</CustomText>
                                <PaymentProceedSVGComponent />
                            </Row>
                        </TouchableOpacity>
                    </Row>
                </VStack>
            </ScrollView>
        </View >
    )
}

export default PaymentCompletedScreen