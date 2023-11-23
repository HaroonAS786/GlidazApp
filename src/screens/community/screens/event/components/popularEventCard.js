import { VStack } from 'native-base'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'

const PopularEventCard = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZedbqvFq9wEKHdTqbqwZmka6bXs13bRKVpUjRKnofi8l2hEu8EoNxLsg1b4jAa_4b_w4&usqp=CAU" }} />
            <Spacer height={6} />
            <VStack style={{ paddingHorizontal: 6 }} space={1}>
                <CustomText body bold >Summer Festival</CustomText>
                <CustomText caption  >March, 26 2023 . 07:00 pm</CustomText>
            </VStack>
        </TouchableOpacity>
    )
}

export default PopularEventCard

const styles = StyleSheet.create({

    container: {
        borderRadius: 10,
        width: 140,
        height: 150,
        backgroundColor: 'white',
        marginRight: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: 15
    },
    image: {
        width: 140,
        height: 75,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
})