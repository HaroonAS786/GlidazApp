import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'

import Spacer from '../../../../components/Spacer'
import CommunityHeader from '../components/CommunityHeader'
import LiveStreamCard from './components/liveStreamCard'

const LiveStream = (props) => {

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <CommunityHeader
                navigation={props.navigation}
                event onEvent={(index) => {
                    if (index == 0) {
                        props.navigation.navigate("CreateEventScreen")
                    } else if (index === 1) {
                        props.navigation.navigate("EventCategory")
                    } else if (index === 2) {
                        props.navigation.navigate("LiveStreamVedio")
                    }

                }} />

            <Spacer height={20} />
            <FlatList
                data={[0, 1, 2, 3, 4]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <LiveStreamCard
                    backPress={() => props.navigation.goBack()}
                />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default LiveStream


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white', flex: 1

    },
    imageCon: {
        flex: 1,
        paddingHorizontal: 16
    },
    footerSvg: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(148, 148, 148, 0.4)',
        borderRadius: 100
    },
    footerActiveSvg: {
        backgroundColor: '#FC685D',
        height: 52,
        width: 100,
        borderRadius: 20
    }


})


