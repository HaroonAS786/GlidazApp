import { ArrowBackIcon, Center, Row, VStack } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'

import EnterPassCodeSVGComponent from '../../../../../assets/svgs/enterSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import OTPInput from '../components/PasscodeComponent'
import getStyles from './styles'
import getStyles from './styles'
const PasscodeScreen = (props) => {

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
                <Spacer height={40} />
                <VStack style={{ paddingHorizontal: 30 }} space={1}>
                    <CustomText h3 bold color={"#0D1634"}>Passcode</CustomText>
                    <CustomText body color={"#808080"}>Enter Your Passcode to Proceed the Payment</CustomText>
                    <CustomText body color={"#0284C7"}>Forgot passcode?</CustomText>
                </VStack>
                <Spacer height={25} />
                <View style={{ paddingHorizontal: 25 }} >
                    <OTPInput />
                    <Spacer height={80} />
                    <TouchableOpacity style={styles.enterBtn} onPress={() => {
                        props.navigation.navigate("PaymentDoneScreen")
                    }}>
                        <Row alignItems={'center'} justifyContent={'center'} space={1.5}>
                            <CustomText body color={"#fff"}>Entert</CustomText>
                            <EnterPassCodeSVGComponent />
                        </Row>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PasscodeScreen