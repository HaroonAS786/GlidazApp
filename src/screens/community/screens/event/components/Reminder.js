import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Reminder = ({ title, date, time }) => {

    const dates = new Date(date);
    const simpleDate = dates.toLocaleDateString(undefined, options);

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.dateTime}>
                {simpleDate} at {time}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    dateTime: {
        fontSize: 14,
        color: 'gray',
        color: 'black'
    },
});

export default Reminder;
