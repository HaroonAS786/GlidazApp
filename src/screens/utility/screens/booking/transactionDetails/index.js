import { ArrowBackIcon, Avatar, Center, Row, VStack } from 'native-base'
import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'

import Spacer from '../../../../../components/Spacer'
import getStyles from './styles'
import CustomText from '../../../../../components/CustomText'
import { PlaneSVGComponent } from '../../../../../assets/svgs'
import PersonSVGComponent from '../../../../../assets/svgs/personSvg'
import PremiumSVGComponent from '../../../../../assets/svgs/PremiemSvg'
import RefundSVGComponent from '../../../../../assets/svgs/refundSvg'
import ButtonComponent from '../../../../../components/ButtonComponent'
import { themeColors } from '../../../../../config/colors'

const TransactionDetailScreen = (props) => {

    const styles = getStyles()

    return (
        <View style={styles.mainContainer}>
            <View>
                <SafeAreaView />
                <Spacer height={20} />
                <Row justifyContent={'space-between'} style={{ paddingHorizontal: 30 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Center style={{ width: 56, height: 37, backgroundColor: 'rgba(13, 22, 52, 0.05)', borderRadius: 16 }}>
                            <ArrowBackIcon />
                        </Center>
                    </TouchableOpacity>
                </Row>
            </View>
            <Spacer height={20} />
            <View style={styles.container}>
                <CustomText h4 color={'#000'}>Transaction Details</CustomText>
                <Spacer height={20} />
                <View style={styles.ticketCard}>
                    <Row justifyContent={'space-between'} style={{ paddingHorizontal: 12 }}>
                        <VStack>
                            <Spacer height={8} />
                            <CustomText body color={'#0D1634'}>Lion Air</CustomText>
                            <Spacer height={16} />
                            <CustomText h3 bold body color={'#0D1634'} h4>VNA</CustomText>
                            <CustomText body2 color={'grey'}>14.00</CustomText>
                            <Spacer height={16} />
                        </VStack>
                        <VStack justifyContent={'center'}>
                            <Center width={68} height={36} borderRadius={100} borderColor={'grey'} borderWidth={.4}>
                                <PlaneSVGComponent />
                            </Center>
                        </VStack>
                        <VStack alignItems={'flex-end'}  >
                            <Spacer height={8} />
                            <CustomText body2 color={'grey'}>Executive</CustomText>
                            <Spacer height={16} />
                            <CustomText h3 bold body color={'#0D1634'} h4>LHR</CustomText>
                            <CustomText body2 color={'grey'}>07.15</CustomText>
                        </VStack>
                    </Row>
                    <Row justifyContent={"space-between"} style={{ paddingHorizontal: 12 }}>
                        <Row alignItems={'center'} space={1}>
                            <PersonSVGComponent />
                            <CustomText body2 color={'#0D1634'}>1 Person</CustomText>
                            <PremiumSVGComponent />
                            <CustomText body2 color={'#0D1634'}>Premium</CustomText>
                        </Row>
                        <Row alignItems={'center'} space={1}>
                            <CustomText body2 color={'#0D1634'}>IDR 650.000</CustomText>
                            <CustomText body2 color={'grey'}>/Pax</CustomText>
                        </Row>
                    </Row>
                    <Spacer height={25} />
                    <Row justifyContent={"space-between"} style={{ paddingHorizontal: 12 }} alignItems={'center'}>
                        <Row alignItems={'center'} space={1}>
                            <Avatar size={'sm'} />
                            <CustomText body2 color={'#0D1634'}>IDR 650.000</CustomText>
                        </Row>
                        <TouchableOpacity onPress={() => { }}>
                            <CustomText body color={'#0284C7'}>Edit</CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={16} />
                </View>
                <Spacer height={16} />
                <VStack space={3}>
                    <Row alignItems={'center'} justifyContent={'space-between'} space={1}>
                        <CustomText body2 color={'#808080'}>Status</CustomText>
                        <CustomText body2 color={'#0284C7'}>Success</CustomText>
                    </Row>
                    <Row alignItems={'center'} justifyContent={'space-between'} space={1}>
                        <CustomText body2 color={'#808080'}>Invoice</CustomText>
                        <CustomText body2 color={'#0D1634'}>INV23124131332</CustomText>
                    </Row>
                    <Row alignItems={'center'} justifyContent={'space-between'} space={1}>
                        <CustomText body2 color={'#808080'}>Transaction Date</CustomText>
                        <CustomText body2 color={'#0D1634'}>Wed, 18 Oct 2023</CustomText>
                    </Row>
                    <Row alignItems={'center'} justifyContent={'space-between'} space={1}>
                        <CustomText body2 color={'#808080'}>Payment Method</CustomText>
                        <CustomText body2 color={'#0D1634'}>Paytren</CustomText>
                    </Row>
                </VStack>

                <Spacer height={16} />
                <VStack style={styles.totalCon} space={4}>
                    <Row alignItems={'center'} justifyContent={'space-between'} space={1}>
                        <CustomText body2 color={'#808080'}>1. Matt Murdock</CustomText>
                        <CustomText body2 color={'#808080'}>Rp. 600.000</CustomText>
                    </Row>
                    <Row alignItems={'center'} justifyContent={'space-between'} space={1}>
                        <CustomText body2 color={'#808080'}>Total </CustomText>
                        <CustomText body2 color={'#0D1634'}>Rp. 600.000</CustomText>
                    </Row>
                </VStack>
                <Spacer height={16} />
                <Row style={styles.refundView} space={1}>
                    <CustomText body2 color={'#FF4E4E'}>Refund or Reschedule Ticket </CustomText>
                    <RefundSVGComponent />
                </Row>
            </View>
            <View style={{ flex: 1, paddingBottom: 20, justifyContent: 'flex-end' }} >
                <ButtonComponent
                    label={'See Details'}
                    onPress={() => {
                        props.navigation.navigate("ETicketsScreen")
                    }}
                    buttonTextColor={themeColors.white}
                    buttonContainerStyle={styles.seeDetailsBtn}
                />
            </View>
        </View>
    )
}

export default TransactionDetailScreen;

