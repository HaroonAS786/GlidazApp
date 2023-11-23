import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

import CustomText from '../../../../../components/CustomText'
import { Center } from 'native-base'
import Spacer from '../../../../../components/Spacer'

const FriendsCard = ({ }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZedbqvFq9wEKHdTqbqwZmka6bXs13bRKVpUjRKnofi8l2hEu8EoNxLsg1b4jAa_4b_w4&usqp=CAU" }} />
            <Spacer height={6} />
            <Center>
                <CustomText caption bold >Lia</CustomText>
            </Center>
        </View>
    )
}

export default FriendsCard

const styles = StyleSheet.create({

    container: {
        borderRadius: 10,
        width: 56,
        height: 47,
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
        width: 56,
        height: 25,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }


})