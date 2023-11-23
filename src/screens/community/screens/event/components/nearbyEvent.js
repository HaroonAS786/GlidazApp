import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText'
import { Center, Divider, Row, VStack } from 'native-base'
import Spacer from '../../../../../components/Spacer'
import KM from '../../../../../assets/svgs/kmSvg'

const NearbyEventCard = ({ onPress, item, index }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <Row style={styles.container}>
                <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZedbqvFq9wEKHdTqbqwZmka6bXs13bRKVpUjRKnofi8l2hEu8EoNxLsg1b4jAa_4b_w4&usqp=CAU" }} />

                <VStack style={{ paddingHorizontal: 6 }} space={1} >
                    <Spacer height={10} />
                    <CustomText body bold >Swimming</CustomText>
                    <CustomText caption  >March, 26 2023 . 07:00 pm</CustomText>
                    <Spacer height={10} />
                    <Divider />
                    <Spacer height={10} />
                    <Row alignItems={'center'}>
                        <KM />
                        <CustomText caption color={"#76777C"}  >1.5 Km</CustomText>
                    </Row>
                </VStack>
            </Row>
        </TouchableOpacity>
    )
}

export default NearbyEventCard


const styles = StyleSheet.create({

    container: {
        borderRadius: 10,
        width: 280,
        height: 120,
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
        height: 120,
        borderRadius: 10,
    }


})