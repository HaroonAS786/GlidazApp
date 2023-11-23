import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import Reminder from './components/Reminder';
import { themeColors } from '../../../../config/colors';
import Header from '../../../../components/common/Header';
import Spacer from '../../../../components/Spacer';
import CustomModal from '../../../../components/customModal';
import { Center } from 'native-base';
import TextInputComponent from '../../../../components/TextInputComponent';
import CustomText from '../../../../components/CustomText';
import ButtonComponent from '../../../../components/ButtonComponent';
import { endOfDay, format } from 'date-fns';
import DateTimePicker from 'react-native-modal-datetime-picker';

const RemindersScreen = (props) => {

    const [reminders, setReminders] = useState([]);
    const [isReminder, setIsReminder] = useState(false);
    const [title, setTitle] = useState('');
    const [selectedDate, setSelectedDate] = useState(endOfDay(new Date()));
    const [selectedTime, setSelectedTime] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const openTimePicker = () => {
        setDatePickerVisibility(true);
    };
    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const hideDatePicker = () => {
        setShowDatePicker(false);
    };


    const handleConfirmDate = (val) => {
        setSelectedDate(val)
        setShowDatePicker(false)

    };

    const hideTimePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmTime = (val) => {
        const time = formattedTime(val)
        setSelectedTime(time)
        setDatePickerVisibility(false)
    };

    const formattedTime = (val) => {
        const date = new Date(val);
        const formattedTime = format(date, 'h:mm:a');
        return formattedTime
    }

    const addReminder = () => {
        let newReminder = {
            title: title,
            date: selectedDate.toISOString(),
            time: selectedTime,
        };
        setReminders([...reminders, newReminder]);
        setTitle("")
    };

    return (
        <View style={styles.container}>
            <Header isHeader2 label={"Reminders"} backPress={() => props.navigation.goBack()} />
            <Spacer height={25} />
            <FlatList
                data={reminders}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Reminder title={item?.title} date={item?.date} time={item?.time} />
                )}
            />
            <TouchableOpacity onPress={() => setIsReminder(true)} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Reminder</Text>
            </TouchableOpacity>
            <CustomModal isVisible={isReminder}>
                <View style={{ width: Dimensions.get('window').width / 1.2, }}>

                    <Center>
                        <CustomText color='black' bold >Create Reminder</CustomText>
                    </Center>

                    <Spacer height={20} />

                    <TextInputComponent
                        placeholder={"Title"}
                        label={'Title'}
                        onChangeText={(e) => setTitle(e)}
                        value={title}

                    />
                    <TouchableOpacity onPress={openTimePicker}>
                        <CustomText body2 style={{ paddingLeft: 6, paddingBottom: 4 }}>Time</CustomText>
                        <View style={styles.inputField}>
                            <Text style={styles.dateText}>{selectedTime}</Text>
                        </View>
                    </TouchableOpacity>
                    <Spacer height={20} />
                    <TouchableOpacity onPress={openDatePicker}>
                        <CustomText body2 style={{ paddingLeft: 6, paddingBottom: 4 }}>Date</CustomText>
                        <View style={styles.inputField}>
                            <Text style={styles.dateText}>{format(selectedDate, 'yyyy-MM-dd')}</Text>
                        </View>
                    </TouchableOpacity>
                    <Spacer height={12} />
                    <ButtonComponent
                        label={'Add'}
                        onPress={() => {
                            addReminder()
                            setIsReminder(false)
                        }}
                        buttonTextColor={themeColors.white}
                    />

                </View>
            </CustomModal>
            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="time" // Set the mode to 'date' for date-only or 'time' for time-only
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
            />
            <DateTimePicker
                isVisible={showDatePicker}
                mode="date" // Set the mode to 'date' for date-only or 'time' for time-only
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
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
    addButton: {
        backgroundColor: themeColors.authButtonPrimary,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    inputField: {
        width: '100%',
        padding: 10,

        borderRadius: 10,
        backgroundColor: '#F1F1F5',
        alignItems: 'flex-start',
    },
    dateText: {
        fontSize: 16,
        color: 'black',
    },
    datePicker: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        alignItems: "center",
        justifyContent: 'center'
    },
    dateInput: {
        borderWidth: 0,
    },
});

export default RemindersScreen;
