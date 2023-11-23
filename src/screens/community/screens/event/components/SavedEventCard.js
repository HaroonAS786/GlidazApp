import { Column, Row } from 'native-base';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SavedEventCard = ({ title, date, location }) => {

    return (
        <View style={styles.container}>
            <Row space={2}>
                <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyC-nbyVaFV64Q9CQQKuUQ7kno5tC776YQixjGOkQQuznuOLfxmmMdE4HmVx-_1TbeyQ&usqp=CAU' }} />
                <Column>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.location}>{location}</Text>
                </Column>
            </Row>
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
    },
    date: {
        fontSize: 14,
        color: 'gray',
    },
    location: {
        fontSize: 14,
        color: 'gray',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20

    }
});

export default SavedEventCard;
