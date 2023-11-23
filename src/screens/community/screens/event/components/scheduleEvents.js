import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import Spacer from '../../../../../components/Spacer'
import Header from '../../../../../components/common/Header'
import ScheduleEventsCard from './ScheduleEventsCard'

const ScheduleEvents = (props) => {
    return (
        <View style={styles.container}>
            <Spacer height={20} />
            <Header isHeader2 label={"Schedule Events"} backPress={() => props.navigation.goBack()} />
            <Spacer height={20} />
            <FlatList
                data={[0, 1, 2, 3, 4, 5, 6]}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <ScheduleEventsCard indx={index} item={item} />
                }
            />
        </View>
    )
}

export default ScheduleEvents

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 16
    }

})

