import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Spacer from '../../../../../components/Spacer';
import Header from '../../../../../components/common/Header';
import SavedEventCard from './SavedEventCard';


const SavedEventScreen = (props) => {
    const savedEvents = [
        {
            id: '1',
            title: 'Event 1',
            date: 'September 20, 2023',
            location: 'Location 1',
        },
        {
            id: '2',
            title: 'Event 2',
            date: 'October 5, 2023',
            location: 'Location 2',
        },
        {
            id: '3',
            title: 'Event 3',
            date: 'November 15, 2023',
            location: 'Location 3',
        },
    ];

    return (
        <View style={styles.container}>
            <Spacer height={20} />
            <Header isHeader2 label={"Saved Events"} backPress={() => props.navigation.goBack()} />
            <Spacer height={30} />
            <FlatList
                data={savedEvents}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <SavedEventCard title={item.title} date={item.date} location={item.location} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,

    },
});

export default SavedEventScreen;
