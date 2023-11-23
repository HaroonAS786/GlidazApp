import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { ChevronDownIcon, Column, Divider, Input, Row, VStack } from 'native-base'
import { themeColors } from '../../config/colors'
import CustomText from '../CustomText'

const InputDropDownField = ({ placeholder, label, isArrowDownSvg }) => {
    return (
        <VStack space={2} backgroundColor={'red'} marginBottom={14}>
            <Row justifyContent={'space-between'} alignItems={'center'}  >
                <Column>
                    <CustomText body2 color='grey'>{label}</CustomText>
                    <Input variant="underlined" placeholder={placeholder} width={Dimensions.get('window').width / 1.3} rightElement={!isArrowDownSvg && <ChevronDownIcon color={themeColors.black} />} />
                </Column>

            </Row>
            {/* <Divider color={themeColors.black} /> */}
        </VStack>
    )
}

export default InputDropDownField