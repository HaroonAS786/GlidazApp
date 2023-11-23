import React from 'react'
import { FlatList, View } from 'react-native'

import Spacer from '../../../../components/Spacer'
import CommunityHeader from '../components/CommunityHeader'
import ChatCard from './components/chatCard'
import ChatHeaderCard from './components/chatHeaderCard'
import getStyles from './styles'

const ChatScreen = (props) => {
    const styles = getStyles()

    return (
        <View style={styles.mainContainer}>
            <CommunityHeader
                onCreatPost={(index) => {
                    if (index === 0) {
                        props.navigation.navigate("CreatePostScreen")
                    }
                    else if (index === 1) {
                        props.navigation.navigate("EventScreen")
                    }
                    else if (index === 2) {
                        props.navigation.navigate("LiveStreamVedio")
                    }
                }}
                navigation={props.navigation}
            />
            <Spacer height={25} />
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => <ChatHeaderCard />}
                />
            </View>
            <Spacer height={25} />
            <View style={{ paddingHorizontal: 16 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12,]}
                    contentContainerStyle={{ paddingBottom: 300 }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => <ChatCard index={index}
                        onPress={() => props.navigation.navigate("ChatNow")}

                    />}
                />
            </View>

        </View>
    )
}

export default ChatScreen