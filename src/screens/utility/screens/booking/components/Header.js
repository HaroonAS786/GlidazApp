import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { ArrowBackIcon, Row } from 'native-base'

import CustomText from '../../../../../components/CustomText'
import { themeColors } from '../../../../../config/colors'

const BookingHeader = ({ label, backPress }) => {
    return (
        <Row justifyContent='center' alignItems='center'>
            <TouchableOpacity onPress={backPress} style={{ position: 'absolute', left: 25, }}>
                <ArrowBackIcon color={themeColors.white} size={22} />
            </TouchableOpacity>
            <CustomText h5 bold color='white'>{label}</CustomText>
        </Row>
    )
}

export default BookingHeader