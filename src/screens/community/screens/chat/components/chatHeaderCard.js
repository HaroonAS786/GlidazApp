import { Avatar, Center, VStack } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'

const ChatHeaderCard = ({ item, index }) => {
    return (
        <VStack style={styles.container}>
            <Center>
                <Avatar size={'lg'} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ihS3fAvKqH5iJ5R3j5KR7VXd5aoYVlbk5cmTyy-y0vU90nCYkWvsRXdQfAy02AgoZ8k&usqp=CAU" }} />
                <Spacer height={8} />
                <CustomText>Alee</CustomText>
            </Center>
        </VStack>
    )
}

export default ChatHeaderCard

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})