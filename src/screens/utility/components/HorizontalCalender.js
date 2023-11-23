import moment from 'moment';
import { Divider } from 'native-base';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import ArrowBackDateSvgSVGComponent from '../../../assets/svgs/arrowBackDateSvg';
import ArrowForwardSVGComponent from '../../../assets/svgs/arrowForwardSvg';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import { themeColors } from '../../../config/colors';

const HorizontalCustomCalendar = ({ onDayPress }) => {
    const [dates, setDates] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(moment());
    const [selectedDate, setSelectedDate] = useState(null); // Initially no date selected
    const [initialDateSelected, setInitialDateSelected] = useState(false); // To track if the current date was initially selected
    const calendarRef = useRef(null);

    useEffect(() => {
        const startOfMonth = moment(currentMonth).startOf('month');
        const endOfMonth = moment(currentMonth).endOf('month');
        const daysInMonth = endOfMonth.diff(startOfMonth, 'days') + 1;
        const newDates = [];
        for (let i = 0; i < daysInMonth; i++) {
            const date = moment(startOfMonth).add(i, 'days');
            newDates.push(date);
        }
        setDates(newDates);
        if (!initialDateSelected && selectedDate === null) {
            setSelectedDate(moment().startOf('day'));
            setInitialDateSelected(true);
        }
    }, [currentMonth, initialDateSelected, selectedDate]);

    useEffect(() => {
        if (selectedDate) {
            const index = dates.findIndex((date) => date.isSame(selectedDate, 'day'));
            if (calendarRef.current && index !== -1) {
                calendarRef.current.scrollToIndex({ animated: true, index });
            }
        }
    }, [dates, selectedDate]);

    const getItemLayout = (_, index) => ({
        length: 68,
        offset: 104 * index,
        index,
    });

    const handlePrevMonth = () => {
        setCurrentMonth(moment(currentMonth).subtract(1, 'months'));
    };

    const handleNextMonth = () => {
        setCurrentMonth(moment(currentMonth).add(1, 'months'));
    };

    const handleDatePress = (date) => {
        onDayPress()
        const selectedDateStr = selectedDate ? selectedDate.format('YYYY-MM-DD') : null;
        const clickedDateStr = date.format('YYYY-MM-DD');
        setSelectedDate((prevSelectedDate) =>
            selectedDateStr === clickedDateStr ? null : date
        );
    };
    const renderItem = useCallback(({ item }) => {
        const isSelected = item.isSame(selectedDate, 'day');
        const backgroundColor = isSelected ? '#D2A53A' : 'white';
        const textColor = isSelected ? 'white' : 'black';

        return (
            <TouchableOpacity onPress={() => handleDatePress(item)}>
                <View style={[styles.dateItem, { backgroundColor }]}>
                    <CustomText body regular color={textColor} style={styles.dayText}>
                        {item.format('dddd')}
                    </CustomText>
                    <CustomText body2 color={textColor} style={styles.dateText}>
                        {item.format('DD/MM/YYYY')}
                    </CustomText>
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePrevMonth}>
                    <ArrowBackDateSvgSVGComponent />
                </TouchableOpacity>
                <Spacer width={10} />
                <FlatList
                    ref={calendarRef}
                    data={dates}
                    keyExtractor={(date) => date.format('YYYY-MM-DD')}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    getItemLayout={getItemLayout}
                />
                <Spacer width={10} />
                <TouchableOpacity onPress={handleNextMonth}>
                    <ArrowForwardSVGComponent />
                </TouchableOpacity>
            </View>
            <Divider _light={{ bg: themeColors.grey }} />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    dateItem: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    dayText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HorizontalCustomCalendar;
