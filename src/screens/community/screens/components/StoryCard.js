import { Avatar, Center } from 'native-base'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import CustomText from '../../../../components/CustomText'
import { themeColors } from '../../../../config/colors'

const StoryCard = ({ item, index, itemClick }) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={itemClick}>
            <Image
                style={styles.image}
                source={{ uri: 'https://media.istockphoto.com/id/1130519293/photo/asian-woman-working-at-a-coffee-shop-with-a-laptop.jpg?s=612x612&w=0&k=20&c=4Qcon-4uQBO0exBW1hfdTyTxm6wTXoY2C2MOiMuUY1s=' }}
            />
            <Center style={styles.statusView}>
                <TouchableOpacity>
                    <Avatar style={styles.statusViewChild} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzQLUoyIbxhgqaAyJ7RpKYIkBmCvARZL62yUYGMATQIKv4KlGz2S4JeN91izl4DDWGck&usqp=CAU" }} />
                </TouchableOpacity>
            </Center>
            <Center style={styles.statusViewText}>
                <CustomText body2 bold color={themeColors.white}>Neiha</CustomText>
            </Center>
        </TouchableOpacity>
    )
}

export default StoryCard

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: "white",
        width: 80,
        height: 152,
        borderRadius: 10,
        marginRight: 10
    },
    image: {
        borderRadius: 10,
        width: 80,
        height: 152,

    },
    statusView: {
        width: 32,
        height: 32,
        borderRadius: 100,
        position: 'absolute',
        borderColor: "#3B82F6",
        borderWidth: 2,
        top: 16,
        left: 12
    },
    statusViewChild: {
        width: 28,
        height: 28,
        borderRadius: 100,
        backgroundColor: '#E5E7EB',
        alignSelf: 'center',

    },
    statusViewText: {

        position: 'absolute',
        top: 130,
        left: 12


    },

})