import { CommonActions } from '@react-navigation/native'
import { ArrowBackIcon, Center, Column, Row, VStack } from 'native-base'
import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, TouchableOpacity, View } from 'react-native'

import DownloadETicketSVGComponent from '../../../../../assets/svgs/downLoadTicketSvg'
import ETicketSVGComponent from '../../../../../assets/svgs/eTicketSvg'
import PrinterSVGComponent from '../../../../../assets/svgs/printerSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import { themeColors } from '../../../../../config/colors'
import { IMAGES } from '../../../../../utils/imagesAssets'
import TicketDownloadDialog from './components/downloadTicket'
import getStyles from './styles'

const ETicketsScreen = (props) => {

    const styles = getStyles()
    const [isDownload, setIsDownLoad] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const handleDownloadTicket = () => {
        setIsDownLoad(true)
        setTimeout(() => {
            setIsDownLoad(false)
            setIsVisible(false)
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'UtilityScreen' }],
                }),
            );
        }, 4000)
    };

    return (
        <ImageBackground style={styles.mainContainer} source={IMAGES.ETicketDetails}>
            <View style={styles.headerView}>
                <SafeAreaView />
                <Spacer height={25} />
                <Row justifyContent={'center'} alignItems={'center'} style={{ paddingHorizontal: 30 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{
                        width: 56, height: 37,
                        backgroundColor: '#2D6480',
                        borderRadius: 16,
                        alignItems: 'center',
                        justifyContent: "center",
                        position: "absolute",
                        left: 16
                    }}>
                        <ArrowBackIcon color={'white'} />
                    </TouchableOpacity>
                    <CustomText color={themeColors.white} h6>E-Ticket</CustomText>
                </Row>
                <Spacer height={50} />

                <Center>
                    <ETicketSVGComponent />
                </Center>
                <VStack
                    style={{
                        width: 312,
                        height: 174,
                        backgroundColor: "#0D1634",
                        borderRadius: 8,
                        position: "absolute",
                        alignSelf: 'center',
                        top: 120
                    }}>
                    <Row justifyContent={'space-between'} style={{ paddingHorizontal: 10, paddingTop: 6 }}>
                        <Column >
                            <CustomText color={themeColors.white} h4 bold>2A</CustomText>
                            <CustomText color={'grey'} body2>SEAT</CustomText>
                        </Column>
                        <Column justifyContent={'flex-end'} alignItems={'center'}>
                            <CustomText color={themeColors.white} h4 bold>B7</CustomText>
                            <CustomText color={'grey'} body2>GATE</CustomText>
                        </Column>
                    </Row>
                    <Row justifyContent={'space-between'} style={{ paddingHorizontal: 10, paddingTop: 6 }}>
                        <Column >
                            <CustomText color={themeColors.white} h4 bold>Premium</CustomText>
                            <CustomText color={'grey'} body2>CLASS</CustomText>
                        </Column>
                        <Column justifyContent={'flex-end'} alignItems={'flex-end'}>
                            <CustomText color={themeColors.white} h4 bold>ID-1234</CustomText>
                            <CustomText color={'grey'} body2>FLIGHT NUMBER</CustomText>
                        </Column>
                    </Row>
                    <Spacer height={30} />
                    <Row justifyContent={'space-between'} style={{ paddingHorizontal: 10, paddingTop: 6 }}>
                        <CustomText color={"grey"} body2>Wed, 27 Oct</CustomText>
                        <CustomText color={'grey'} body2>9:37 PM</CustomText>
                    </Row>
                    <Spacer height={70} />
                    <Row justifyContent={'space-between'} style={{ paddingHorizontal: 10, paddingTop: 6 }}>
                        <VStack>
                            <CustomText color={themeColors.black} h2 bold >VNA</CustomText>
                            <CustomText color={'black'} body2>Vietnam</CustomText>
                        </VStack>
                        <VStack>
                            <CustomText color={themeColors.black} h2 bold >LHR</CustomText>
                            <CustomText color={'black'} body2>London</CustomText>
                        </VStack>
                    </Row>
                </VStack>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }} >
                <Row style={{ backgroundColor: 'white', width: '100%', padding: 20 }} space={8}>
                    <TouchableOpacity style={{
                        backgroundColor: themeColors.utilityPrime,
                        width: '70%',
                        padding: 15,
                        borderRadius: 8
                    }}
                        onPress={() => {
                            setIsVisible(true)
                        }}
                    >
                        <Row space={2} alignItems={'center'} justifyContent={'center'}>
                            <DownloadETicketSVGComponent />
                            <CustomText color={'white'} body2>Download E-Ticket</CustomText>
                        </Row>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: "lightgrey",
                        width: 44,
                        height: 44,
                        borderRadius: 100,
                    }} >
                        <PrinterSVGComponent />
                    </TouchableOpacity>
                </Row>
            </View>
            <TicketDownloadDialog isVisible={isVisible} isDownload={isDownload} handleDownloadTicket={handleDownloadTicket} />
        </ImageBackground>
    )
}

export default ETicketsScreen