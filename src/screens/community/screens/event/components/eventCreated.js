import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import EventSuccess from '../../../../../assets/svgs/utilityBottomTabSvg/eventSuccessSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import CommunityHeader from '../../components/CommunityHeader'

const EventCreated = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("EventSummary")
        }, 2000);
    }, [])

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
            <View style={styles.eventSuccess}>
                <Spacer height={200} />
                <EventSuccess />
                <Spacer height={12} />
                <CustomText color={'black'} bold body>Event created successfully</CustomText>
            </View>
        </View>
    )
}
export default EventCreated

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', flex: 1

    },
    eventSuccess: {
        flex: 1,
        alignItems: 'center'
    }
})