import { Column, Row, VStack } from 'native-base'
import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'

import CustomText from '../../../../../components/CustomText'

const ScheduleEventsCard = ({ item, indx }) => {

    return (
        <VStack style={styles.container}>
            <Row space={2}>
                <Image style={styles.image} source={{ uri: "https://media.istockphoto.com/id/1136979326/photo/concert-in-city-park-summer-time.jpg?s=2048x2048&w=is&k=20&c=IiYfhUQeajUlHW0Ni4ZMpacDLY_c-UcPkBZyOU8tcWc=" }} />
                <Column space={1}>
                    <Row justifyContent={'space-between'} >
                        <CustomText bold body>DataBase Events</CustomText>
                        <CustomText caption >November 28, 2015</CustomText>
                    </Row>
                    <CustomText style={{ width: Dimensions.get('window').width / 1.4 }} caption >Lorem ipsum dolor sit amet consectetur. At elementum rhoncus odio pretium vitae suscipit. Id congue curabitur nulla felis a faucibus.</CustomText>
                </Column>
            </Row>
        </VStack>
    )
}

export default ScheduleEventsCard

const styles = StyleSheet.create({

    image: {
        width: 70,
        height: 70,
        borderRadius: 12
    },
    container: {
        marginTop: 10,
    }

})



