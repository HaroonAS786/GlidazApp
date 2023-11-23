import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';

import { ChevronDownIcon, Divider } from 'native-base';
import Spacer from '../Spacer';
import CustomText from '../CustomText';

const CustomDropDown = ({
    options,
    onSelect,
    label,
    style,
    dropContStyle,
    labelStyle,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = option => {
        console.log(option);
        setIsOpen(false);
        setValue(option);
        // onSelect(option);
    };

    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                onPress={handleToggle}
                style={[styles.dropdownButton, style]}>
                <Text
                    style={[
                        value ? styles.selectedDropdownText : styles.dropdownButtonText,
                        labelStyle,
                    ]}>
                    {value ? value : label}
                </Text>
                <Spacer width={4} />
                <ChevronDownIcon />
            </TouchableOpacity>
            <Divider width={Dimensions.get('window').width / 1.3} />

            {isOpen && (
                <View style={[styles.dropdownContent, dropContStyle]}>
                    <FlatList
                        data={options}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleSelectOption(item.label)}
                                style={styles.dropdownOption}>
                                <CustomText color='black'>{item.label}</CustomText>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.value}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: Dimensions.get('window').width / 2.3,
    },
    dropdownButton: {
        padding: 13,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedDropdownText: {
        fontSize: 14,
        color: 'black',
        marginRight: 100
    },
    dropdownButtonText: {
        fontSize: 14,
        color: 'lightgrey',
    },
    dropdownContent: {
        position: 'absolute',
        top: 40,
        width: '100%',

        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

        borderWidth: 0.2,
        borderColor: 'lightgrey',
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 4,
    },
    dropdownOption: {
        padding: 10,
    },
});

export default CustomDropDown;
