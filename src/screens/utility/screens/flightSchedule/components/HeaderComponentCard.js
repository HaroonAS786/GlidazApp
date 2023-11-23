import { Row } from 'native-base'
import React from 'react'
import { View } from 'react-native'

import CustomText from '../../../../../components/CustomText'
import { themeColors } from '../../../../../config/colors'

const HeaderComponentCard = ({ index, item }) => {
    return (
        <Row alignItems={'center'} space={75}>
            <CustomText bold color={themeColors.utilitySecondary} body> Flight No. </CustomText>
            <CustomText bold color={themeColors.utilitySecondary} body> Orign </CustomText>
            <View style={{ marginLeft: 30 }}>
                <CustomText bold color={themeColors.utilitySecondary} body> Destination </CustomText>
            </View>
            <CustomText bold color={themeColors.utilitySecondary} body> Departure </CustomText>
            <CustomText bold color={themeColors.utilitySecondary} body> Arrival </CustomText>
            <CustomText bold color={themeColors.utilitySecondary} body> Frequency </CustomText>
            <CustomText bold color={themeColors.utilitySecondary} body> Via </CustomText>
        </Row>
    )
}
export default HeaderComponentCard