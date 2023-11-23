import { Avatar, Column, Row } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import EventMenu from '../../../../../assets/svgs/eventMenu'
import CustomText from '../../../../../components/CustomText'

const SeeFriendCard = ({ menuPress }) => {
    return (
        <Row space={2} style={{ marginBottom: 25 }} justifyContent={'space-between'}>
            <Row space={2}>
                <Avatar size={'lg'} source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" }} />
                <Column space={1}>
                    <CustomText bold body>Callya Ashley</CustomText>
                    <CustomText bold body2 color={'grey'}>Friend request</CustomText>
                </Column>
            </Row>
            <TouchableOpacity onPress={menuPress}>
                <EventMenu />
            </TouchableOpacity>
        </Row>
    )
}

export default SeeFriendCard