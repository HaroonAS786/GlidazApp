import { Center } from 'native-base'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import Plus from '../../../../assets/svgs/plusSvg'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'

const StoryCardHeaderItem = ({ onPress }) => {

    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <Image
                style={styles.image}
                source={{ uri: 'https://media.istockphoto.com/id/1130519293/photo/asian-woman-working-at-a-coffee-shop-with-a-laptop.jpg?s=612x612&w=0&k=20&c=4Qcon-4uQBO0exBW1hfdTyTxm6wTXoY2C2MOiMuUY1s=' }}
            />
            <Center style={styles.plusCon}>
                <TouchableOpacity>
                    <Center style={styles.plusConChild}>
                        <Plus />
                    </Center>
                </TouchableOpacity>
            </Center>
            <Spacer height={30} />
            <Center>
                <CustomText color={themeColors.black} caption bold>Create story</CustomText>
            </Center>
        </TouchableOpacity>
    )
}

export default StoryCardHeaderItem

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: "white",
        width: 80,
        height: 152,
        borderRadius: 10,
        marginRight: 10
    },
    image: {
        width: 80,
        height: 96,
        borderRadius: 10
    },
    plusCon: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        top: 80
    },
    plusConChild: {
        width: 28,
        height: 28,
        borderRadius: 100,
        backgroundColor: '#E5E7EB',
        alignSelf: 'center',

    }

})