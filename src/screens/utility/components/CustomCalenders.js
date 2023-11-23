import React, { useState } from 'react';
import { View } from 'react-native';

import { Calendar } from 'react-native-calendars';
import { themeColors } from '../../../config/colors';

const CalendarView = ({ dayPress }) => {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        dayPress()
    };

    const customTheme = {
        calendarBackground: 'white',
        monthTextColor: 'black', // Change this to the desired month text color
        arrowColor: 'black',
        dayTextColor: 'black',
        textSectionTitleColor: 'black',
        selectedDayBackgroundColor: 'blue',
        selectedDayTextColor: 'white',
    };

    return (
        <View style={{ flex: 1 }}>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        selectedColor: themeColors.utilityPrime, // Change this to the desired border color
                    },
                }}
                theme={customTheme}
            />
        </View>
    );
};

export default CalendarView;

