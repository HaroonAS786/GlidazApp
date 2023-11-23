import React, { useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { endOfDay, format } from 'date-fns'
import { Center, VStack } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import ButtonComponent from '../../../../../components/ButtonComponent'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import TextInputComponent from '../../../../../components/TextInputComponent'
import Header from '../../../../../components/common/Header'
import { themeColors } from '../../../../../config/colors'
import CommunityHeader from '../../components/CommunityHeader'


const CreateEventScreen = (props) => {

    const [selectedDate, setSelectedDate] = useState(endOfDay(new Date()));
    const [selectedTime, setSelectedTime] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false); // State to control the visibility of the date picker
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
        setSelectedDate(endOfDay(val))
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

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <CommunityHeader navigation={props.navigation}
                event onEvent={(index) => {
                    if (index == 0) {
                        props.navigation.navigate("CreateEventScreen")
                    }
                    else if (index === 1) {
                        props.navigation.navigate("EventCategory")
                    }
                    else if (index === 2) {
                        props.navigation.navigate("LiveStreamVedio")
                    }
                }} />
            <Spacer height={20} />
            <Header label={"Start your amazing event"} labelColor={'black'} isHeader2 backPress={() => props.navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack style={styles.inputContainer}>
                    <Spacer height={20} />
                    <TextInputComponent
                        label={"Event Name"}
                        inputStyle={{ borderRadius: 10 }}
                    />
                    <Spacer height={10} />
                    <TextInputComponent
                        label={"Organizer"}
                        inputStyle={{ borderRadius: 10 }}
                    />
                    <Spacer height={10} />
                    <TextInputComponent
                        label={"Number of participants"}
                        inputStyle={{ borderRadius: 10 }}
                        maxLength={1}
                        keyboardType={'number-pad'}
                    />
                    <Spacer height={10} />

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

                    <Spacer height={20} />

                    <CustomText body2>Description</CustomText>
                    <Spacer height={6} />
                    <View style={{ borderRadius: 10, height: 150, backgroundColor: '#F1F1F5', paddingHorizontal: 6 }}>
                        <TextInput multiline={true} />
                    </View>
                    <Spacer height={80} />
                    <Center>
                        <ButtonComponent
                            label={'Get Started'}
                            onPress={() => {
                                props.navigation.navigate("EventCreated")
                            }}
                            buttonTextColor={themeColors.black}
                            buttonContainerStyle={{ backgroundColor: 'white', padding: 0, width: 100, borderColor: "#082F49", borderWidth: 1 }}
                        />
                    </Center>
                </VStack>
                <Spacer height={80} />
            </ScrollView>
            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
            />
            <DateTimePicker
                isVisible={showDatePicker}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

export default CreateEventScreen


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white', flex: 1
    },

    inputContainer: {
        paddingHorizontal: 16
    }
    ,
    label: {
        fontSize: 18,
        marginBottom: 10,
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
})