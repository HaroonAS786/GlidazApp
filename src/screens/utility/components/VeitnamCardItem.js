import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const VeitnamCardItem = ({ index, item }) => {
    return (
        <View style={styles.mainContainer}>
            <Image
                style={styles.imageContainer}
                source={{
                    uri: 'https://thumbs.dreamstime.com/z/man-using-phone-business-app-walking-to-airport-gate-black-trip-suitcase-terminal-panorama-free-space-191984886.jpg?w=992',
                }}
            />
        </View>
    );
};

export default VeitnamCardItem;

const styles = StyleSheet.create({
    mainContainer: {
        width: 170,
        height: 200,
        borderRadius: 20,
        margin: 16,
    },
    imageContainer: {
        width: 170,
        height: 200,
        borderRadius: 20,
    },
});
