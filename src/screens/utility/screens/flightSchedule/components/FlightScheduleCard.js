import React from 'react'
import { View } from 'react-native'

import CustomText from '../../../../../components/CustomText'
import { themeColors } from '../../../../../config/colors'

const FlightScheduleCard = ({ index, item }) => {
    return (
        <View style={{ justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', marginTop: 20 }} >
            <CustomText color={index % 2 == 0 ? themeColors.black : "#1D4ED8"} body2> {item.FlightNo} </CustomText>
            <CustomText color={index % 2 == 0 ? themeColors.black : "#1D4ED8"}> {item.Origin} </CustomText>
            <CustomText color={index % 2 == 0 ? themeColors.black : "#1D4ED8"} body2> {item.Destination} </CustomText>
            <CustomText color={index % 2 == 0 ? themeColors.black : "#1D4ED8"} body2> {item.Departure} </CustomText>
            <CustomText color={index % 2 == 0 ? themeColors.black : "#1D4ED8"} body2> {item.Arrival} </CustomText>
            <CustomText color={index % 2 == 0 ? themeColors.black : "#1D4ED8"} body2> {item.Frequency} </CustomText>
            <CustomText color={index % 2 == 0 ? themeColors.black : "#1D4ED8"} body2> {item.Via}</CustomText>
        </View>
    )
}

export default FlightScheduleCard