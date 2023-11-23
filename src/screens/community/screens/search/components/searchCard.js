import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchIcon } from 'native-base';

const SearchComponentCard = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <SearchIcon color={'black'} size={22} />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="#888"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default SearchComponentCard;
