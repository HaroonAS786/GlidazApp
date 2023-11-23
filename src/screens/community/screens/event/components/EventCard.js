import { Column, Row, VStack } from 'native-base'
import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import CustomText from '../../../../../components/CustomText'

const EventCard = ({ item, indx }) => {

    return (
        <VStack style={styles.container}>
            <Row space={2}>
                <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyQ1nzcsckeOHfGoHxrQPe_BRYvCUqwPaaTKXwQ4hkvqZbU3z8SUZWzEz4KJA_iizoPU&usqp=CAU" }} />
                <Column space={1}>
                    <Row justifyContent={'space-between'} >
                        <CustomText bold body>Event name</CustomText>
                        <CustomText caption >November 28, 2015</CustomText>
                    </Row>
                    <CustomText style={{ width: Dimensions.get('window').width / 1.4 }} caption >Lorem ipsum dolor sit amet consectetur. At elementum rhoncus odio pretium vitae suscipit. Id congue curabitur nulla felis a faucibus.</CustomText>
                </Column>
            </Row>
        </VStack>
    )
}

export default EventCard

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