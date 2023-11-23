import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import Spacer from '../../../../../components/Spacer'
import Header from '../../../../../components/common/Header'
import TrendingCard from './TrendingCard'
const TrendingEvents = (props) => {

    return (
        <View style={styles.container}>
            <Spacer height={20} />
            <Header isHeader2 label={" Trending Events"} backPress={() => props.navigation.goBack()} />
            <Spacer height={20} />
            <FlatList
                data={[0, 1, 2, 3, 4, 5, 6]}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <TrendingCard />
                }
            />
        </View>
    )
}

export default TrendingEvents

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 16
    }

})