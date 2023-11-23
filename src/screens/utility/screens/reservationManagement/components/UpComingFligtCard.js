import { Center, Row, VStack } from 'native-base'
import React from 'react'
import { Dimensions, Platform, StyleSheet, View } from 'react-native'

import { UpComingFlightDividerSVGComponent, UpcomingFlightCardSVGComponent } from '../../../../../assets/svgs'
import CountryFlightSVGComponent from '../../../../../assets/svgs/utilityBottomTabSvg/CountryflightSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'

const UpComingFligtCard = ({ item, index }) => {
    return (
        <View style={{ height: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.28 : Dimensions.get('window').height * 0.3, }}>
            <Center>
                <UpcomingFlightCardSVGComponent />
            </Center>
            <View style={styles.cardContainer}>
                <Row justifyContent={'space-evenly'}>
                    <Spacer width={12} />
                    <VStack space={2}>
                        <CustomText color='#0067FF' body>CGK</CustomText>
                        <CustomText color='grey' body2>Jakarta</CustomText>
                        <CustomText color='grey' body2>01 July, 2024</CustomText>
                        <CustomText color='black' body>10:00 PM</CustomText>
                    </VStack>
                    <VStack >
                        <CustomText body2 h7 color='grey' style={{ textAlign: "center" }}>7h 20m</CustomText>
                        <UpComingFlightDividerSVGComponent width={100} />
                    </VStack>
                    <Spacer width={12} />
                    <VStack space={2}>
                        <CustomText color='#0067FF' body>NRT</CustomText>
                        <CustomText color='grey' body2>Tokyo</CustomText>
                        <CustomText color='grey' body2>Flight No</CustomText>
                        <CustomText color='black' body>BE129</CustomText>
                    </VStack>
                    <Spacer width={8} />
                </Row>
                <Spacer height={60} />
                <Row space={2} alignItems={'center'} marginLeft={2}>
                    <CountryFlightSVGComponent />
                    <CustomText color='grey' body>CGK</CustomText>
                </Row>
            </View>
        </View>
    )
}

export default UpComingFligtCard

const styles = StyleSheet.create({
    cardContainer: { top: 40, left: 0, right: 0, bottom: 0, paddingHorizontal: 38, position: 'absolute' }
})