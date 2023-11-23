import { Avatar, Center, Column, Row } from 'native-base'
import React, { useCallback } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import CustomText from '../../../../../components/CustomText'

const ChatCard = ({ index, onPress }) => {

    const setBg = useCallback(() => {
        if (index === 0) {
            return "#3B82F6"
        } else if (index % 2 === 0) {
            return "rgba(252, 165, 165, .4)"
        }
    })

    const setColor = useCallback(() => {
        if (index === 0) {
            return "white"
        } else if (index % 2 === 0) {
            return "grey"
        } else {
            return 'black'
        }
    })

    return (
        <TouchableOpacity onPress={onPress}>
            <Row style={[styles.container, { backgroundColor: setBg() }]} justifyContent={'space-between'} alignItems={'center'}>
                <Row space={2} alignItems={'center'}>
                    <Avatar size={'md'} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ihS3fAvKqH5iJ5R3j5KR7VXd5aoYVlbk5cmTyy-y0vU90nCYkWvsRXdQfAy02AgoZ8k&usqp=CAU" }} />
                    <Column>
                        <CustomText h7 bold color={setColor()}>Alvin</CustomText>
                        <CustomText body2 color={setColor()}>Thanks a lot Brate!</CustomText>
                    </Column>
                </Row>
                <Column alignItems={'center'} space={2}>
                    <CustomText body color={setColor()}>{index === 0 ? "Just Now" : "12.32"}</CustomText>
                    <Center style={styles.noOfMessage}>
                        <CustomText caption color={'white'}>2</CustomText>
                    </Center>
                </Column>
            </Row>
        </TouchableOpacity>


    )
}

export default ChatCard

const styles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        marginBottom: 20
    },
    noOfMessage: {
        width: 14,
        height: 14,
        borderRadius: 100,
        backgroundColor: "#FC685D"

    }

})