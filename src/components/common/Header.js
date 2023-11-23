import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { ArrowBackIcon, ChevronLeftIcon, Row } from 'native-base'
import CustomText from '../CustomText'
import { themeColors } from '../../config/colors'

const Header = ({ isHeader1, isHeader2, label, backPress, labelColor }) => {

    if (isHeader1) {
        return (
            <Row alignItems={'center'} justifyContent={'center'}>
                <TouchableOpacity onPress={backPress} style={styles.svgView}>
                    <ArrowBackIcon color={themeColors.white} />
                </TouchableOpacity>
                <CustomText color={labelColor} body>{label}</CustomText>
            </Row>
        )
    }
    if (isHeader2) {
        return (
            <Row alignItems={'center'} justifyContent={'center'}>
                <TouchableOpacity onPress={backPress} style={styles.svgView}>
                    <ChevronLeftIcon color={themeColors.black} />
                </TouchableOpacity>
                <CustomText color={labelColor} bold h6>{label}</CustomText>
            </Row>
        )
    }

    return (
        <Row alignItems={'center'} justifyContent={'center'}>

            <CustomText color={labelColor} bold h6>{label}</CustomText>
        </Row>
    )

}

export default Header

const styles = StyleSheet.create({

    svgView: {
        position: "absolute",
        left: 16,

        alignItems: 'center'
    }

})