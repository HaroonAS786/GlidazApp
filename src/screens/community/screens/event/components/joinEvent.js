import { Center, Input } from 'native-base'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import ButtonComponent from '../../../../../components/ButtonComponent'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import { themeColors } from '../../../../../config/colors'
import CommunityHeader from '../../components/CommunityHeader'

const JoinEvent = (props) => {

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <CommunityHeader navigation={props.navigation}
                event onEvent={(index) => {
                    if (index == 0) {
                        props.navigation.navigate("CreateEventScreen")
                    } else if (index === 1) {
                        props.navigation.navigate("EventCategory")
                    }
                    else if (index === 2) {
                        props.navigation.navigate("LiveStreamVedio")
                    }

                }} />
            <Spacer height={20} />
            <Center>
                <CustomText h4 bold>Join daily standup</CustomText>
            </Center>
            <Spacer height={200} />
            <View>
                <Center>
                    <CustomText h6 >Enter event link</CustomText>
                </Center>
                <Spacer height={25} />
                <View style={{ paddingHorizontal: 16 }}>
                    <Input placeholder='Enter link' />
                    <Spacer height={25} />
                    <ButtonComponent
                        label={'Join'}
                        // loader={loading}
                        onPress={() => {
                            props.navigation.navigate("EventStarted")
                        }}

                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={{ backgroundColor: themeColors.authButtonPrimary }}
                    />
                </View>
            </View>
        </View>
    )
}

export default JoinEvent

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white', flex: 1
    },
    eventSuccess: {
        flex: 1,
        alignItems: 'center'
    }
})