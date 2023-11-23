import { Heading, VStack } from 'native-base'
import React from 'react'

import { FlatList, StyleSheet, View } from 'react-native'
import Spacer from '../../../../components/Spacer'
import Header from '../../../../components/common/Header'
import FlightCard from './components/flightCard'

const SeeAllFlights = (props) => {

    return (
        <VStack flex={1}>
            <Spacer height={20} />
            <Header isHeader2 label={"Flights"} backPress={() => props.navigation.goBack()} />
            <View style={styles.container}>
                <Spacer height={40} />
                <Heading size={'md'}>Flights in Best Price</Heading>
                <Spacer height={20} />
                <FlatList
                    data={[0, 1, 2, 3, 4, 5, 6, 7]}
                    renderItem={({ item, index }) => <FlightCard />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </VStack>
    )
}

export default SeeAllFlights

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 16

    }
})