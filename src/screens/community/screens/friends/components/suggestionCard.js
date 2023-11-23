import { Avatar, Column, Row } from 'native-base'
import React from 'react'

import ButtonComponent from '../../../../../components/ButtonComponent'
import CustomText from '../../../../../components/CustomText'
import { themeColors } from '../../../../../config/colors'

const SuggestionCard = ({ }) => {
    return (
        <Row space={2} style={{ marginBottom: 25 }}>
            <Avatar size={'lg'} source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" }} />
            <Column space={1}>
                <CustomText bold body>Callya Ashley</CustomText>
                <CustomText bold body2 color={'grey'}>Friend request</CustomText>
                <Row space={2}>
                    <ButtonComponent
                        label={'Add'}
                        onPress={() => null}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={{ width: 100, padding: 0 }}
                    />
                    <ButtonComponent
                        label={'Remove'}
                        onPress={() => null}
                        buttonTextColor={themeColors.authPrimary}
                        buttonContainerStyle={{ width: 100, padding: 0, backgroundColor: '#F0F8FF' }}
                    />
                </Row>
            </Column>
        </Row>
    )
}

export default SuggestionCard