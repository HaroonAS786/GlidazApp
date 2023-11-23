import { Center, Row, VStack } from 'native-base'
import React from 'react'

import { PlaneSVGComponent } from '../../../../../assets/svgs'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'

const FlightTrackingCard = ({ index, item }) => {

    return (
        <Row justifyContent={'space-between'} borderColor={'grey'} borderWidth={1} marginBottom={12} borderRadius={20} style={{ paddingHorizontal: 12 }}>
            <VStack>
                <Spacer height={8} />
                <CustomText body color={'#0D1634'}>Lion Air</CustomText>
                <Spacer height={16} />
                <CustomText h3 bold body color={'#0D1634'} h4>VNA</CustomText>
                <CustomText body2 color={'grey'}>14.00</CustomText>
                <Spacer height={16} />
            </VStack>
            <VStack justifyContent={'center'}>
                <Center width={68} height={36} borderRadius={100} borderColor={'grey'} borderWidth={.4}>
                    <PlaneSVGComponent />
                </Center>
            </VStack>
            <VStack>
                <Spacer height={8} />
                <CustomText body2 color={'grey'}>Executive</CustomText>
                <Spacer height={16} />
                <CustomText h3 bold body color={'#0D1634'} h4>LHR</CustomText>
                <CustomText body2 color={'grey'}>07.15</CustomText>
            </VStack>
        </Row>
    )
}

export default FlightTrackingCard