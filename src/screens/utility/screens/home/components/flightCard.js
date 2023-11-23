import { Row, VStack } from 'native-base'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'

const FlightCard = ({ item, index }) => {

    return (
        <VStack style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://thumbs.dreamstime.com/z/man-using-phone-business-app-walking-to-airport-gate-black-trip-suitcase-terminal-panorama-free-space-191984886.jpg?w=992',
                }}
            />
            <Spacer height={20} />
            <Row justifyContent={'space-between'} style={{ paddingHorizontal: 12 }}>
                <CustomText body bold>Qatar Airline</CustomText>
                <Row alignItems={'center'} space={1}>
                    <CustomText body bold>Price:</CustomText>
                    <CustomText caption bold style={{ marginTop: 2 }}>$1000</CustomText>
                </Row>
            </Row>
        </VStack>
    )
}

export default FlightCard

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        height: 200,
        borderRadius: 4,
        marginBottom: 20
    },
    image: {
        height: 100,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    }

})