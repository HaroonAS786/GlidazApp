import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { VStack, Row } from 'native-base'

import { themeColors } from '../../../../../config/colors'
import CustomText from '../../../../../components/CustomText'

const NotificationCard = ({ item, index }) => {

    return (
        <TouchableOpacity>
            <Row justifyContent={'space-between'} alignItems={'center'} style={{ paddingHorizontal: 8, padding: 20 }}>
                <VStack space={1}>
                    <CustomText color={themeColors.utilityPrime} bold body>Lahore Flight at 20:00 pm</CustomText>
                    <View style={{ width: '90%' }}>
                        <CustomText color={themeColors.black} body2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CustomText>
                    </View>
                </VStack>

                <View
                    style={{ width: 8, height: 8, borderRadius: 100, backgroundColor: 'red' }} />
            </Row>
        </TouchableOpacity>
    )
}

export default NotificationCard