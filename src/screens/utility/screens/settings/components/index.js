import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronDownIcon, Column, Divider, Row } from 'native-base'

import CustomText from '../../../../../components/CustomText'
import { themeColors } from '../../../../../config/colors'
import Spacer from '../../../../../components/Spacer'

const MenuCard = ({ item, index, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Column style={styles.mainContainer}>
                <Row justifyContent={'space-between'} alignItems={'center'}>
                    <Row>
                        {item?.svg}
                        <Spacer width={10} />
                        <CustomText bod2 style={{ width: 250 }}>{item.name}</CustomText>
                    </Row>
                    <ChevronDownIcon color={themeColors.black} />
                </Row>
                <Spacer height={12} />
                <Divider />
                <Spacer height={30} />
            </Column>
        </TouchableOpacity>
    )
}

export default MenuCard

const styles = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: themeColors.white,
        paddingHorizontal: 30
    },
})