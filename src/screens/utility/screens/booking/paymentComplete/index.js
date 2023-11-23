import { ArrowBackIcon, Center, Row, VStack, ChevronRightIcon } from 'native-base'
import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'

import Spacer from '../../../../../components/Spacer'
import getStyles from './styles'
import PaymentCompleteSVGComponent from '../../../../../assets/svgs/paymentCompleteSvg'
import CustomText from '../../../../../components/CustomText'
import CalenderSVGComponent from '../../../../../assets/svgs/calenderSvg'
import TimeSVGComponent from '../../../../../assets/svgs/timeSvg'
import HourSVGComponent from '../../../../../assets/svgs/hourSvg'
import ButtonComponent from '../../../../../components/ButtonComponent'
import { themeColors } from '../../../../../config/colors'

const PaymentDoneScreen = (props) => {

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
                <Spacer height={150} />
                <VStack alignItems={'center'} >
                    <PaymentCompleteSVGComponent />
                    <Spacer height={25} />
                    <CustomText h3 bold color={"#0D1634"}>Payment Complete</CustomText>
                </VStack>
                <Spacer height={20} />
                <View style={styles.paymentChild}>
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
            <View style={{ flex: 1, paddingBottom: 20, justifyContent: 'flex-end' }} >
                <ButtonComponent
                    label={'See Details'}

                    onPress={() => {
                        props.navigation.navigate("TransactionDetailScreen")
                    }}
                    buttonTextColor={themeColors.white}
                    buttonContainerStyle={styles.seeDetailsBtn}
                />
            </View>
        </View>
    )
}

export default PaymentDoneScreen