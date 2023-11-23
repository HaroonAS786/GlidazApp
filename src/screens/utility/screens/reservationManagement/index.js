import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Platform, ScrollView, TouchableOpacity, View } from 'react-native';

import { Center, Column, Row, SearchIcon, VStack } from 'native-base';
import { AddBookingSVGComponent, AppLogoSvg2Component, BookingSVGComponent } from '../../../../assets/svgs';
import ButtonComponent from '../../../../components/ButtonComponent';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import Header from '../../../../components/common/Header';
import InputDropDownField from '../../../../components/common/InputDropDownField';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import { themeColors } from '../../../../config/colors';
import { ByCodeArray, RenderUtilityScreens } from '../../../../utils/helper';
import UpComingFligtCard from './components/UpComingFligtCard';
import getStyles from './styles';

const ReservationManagementScreen = (props) => {

    const styles = getStyles();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isBookNow, setIsBookNow] = useState(false);
    const [homeIndex, setHomeIndex] = useState(4);

    return (
        <View style={styles.mainContainer}>

            <View style={styles.headerCon}>
                <Spacer height={Platform.OS === 'ios' ? 50 : 20} />
                <Header isHeader1 label={"Reservation Management"} backPress={() => {
                    if (selectedIndex === 1) {
                        if (isBookNow) {
                            setIsBookNow(false)
                        } else {
                            props.navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'UtilityStack' }],
                                }),
                            );
                            setSelectedIndex(0)
                        }
                    } else {
                        props.navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'UtilityStack' }],
                            }),
                        );
                    }
                }} labelColor={themeColors.white} />
                <View style={{ marginStart: 16, marginTop: 16 }}>
                    <AppLogoSvg2Component />
                </View>
            </View>
            <ScrollView>
                <Row justifyContent={'space-around'} backgroundColor={"white"} style={{ padding: 16 }}>
                    {[
                        {
                            name: "By Code",
                            svg: <SearchIcon size={18}
                                color={selectedIndex === 0 ? "#D2A53A" : 'black'} />
                        },
                        {
                            name: "Upcoming Flight",
                            svg: <BookingSVGComponent stroke={selectedIndex === 1 ? "#D2A53A" : 'black'}
                                width={22} height={20}
                            />

                        }].map((val, index) =>
                            <TouchableOpacity onPress={() => {
                                if (index === 0) {
                                    setIsBookNow(false)
                                }
                                setSelectedIndex(index)
                            }}>
                                <Column>
                                    <Center>
                                        {val.svg}
                                        <Spacer height={6} />
                                        <CustomText color={index === selectedIndex ? "#D2A53A" : themeColors.black}>{val.name}</CustomText>
                                    </Center>
                                </Column>
                            </TouchableOpacity>
                        )}
                </Row>
                <View style={styles.bodyContainer}>
                    {selectedIndex === 0 &&
                        <>
                            <Spacer height={25} />
                            <View style={styles.flighCardView}>
                                <CustomText body2 color={themeColors.grey} bold>Please fill the below required information to follow up your booking and add additional services</CustomText>
                                <Spacer height={10} />
                                {ByCodeArray.map((val, index) => {
                                    return <InputDropDownField key={index} placeholder={val.placeholder} label={val.label} isArrowDownSvg={val.isArrowDownSvg} />
                                })}
                            </View>
                        </>
                    }
                    {selectedIndex === 1 &&
                        <>
                            {!isBookNow && <Spacer height={100} />}
                            {isBookNow &&
                                <FlatList
                                    data={[0, 1, 2, 3]}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item, index }) => <UpComingFligtCard />}
                                    contentContainerStyle={{ paddingBottom: 70 }}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            }
                            {!isBookNow &&
                                <>
                                    <VStack space={2}>
                                        <Center>
                                            <AddBookingSVGComponent />
                                            <CustomText bold body color={themeColors.black}>No flight journey</CustomText>
                                        </Center>
                                    </VStack>
                                    <Spacer height={25} />
                                    <Center>
                                        <ButtonComponent
                                            label={'Book now'}
                                            // loader={loading}
                                            onPress={() => {
                                                setIsBookNow(true)
                                            }}
                                            buttonTextColor={themeColors.black}
                                            buttonContainerStyle={styles.btnBookingView}
                                        />
                                    </Center>
                                </>
                            }
                        </>
                    }
                    {selectedIndex === 0 && <View style={styles.btnContainer}>
                        <Spacer height={60} />
                        <ButtonComponent
                            label={'By Code'}
                            // loader={loading}
                            onPress={() => {
                                props.navigation.navigate(
                                    "SeeTrackingScreen"
                                );
                            }}
                            buttonTextColor={themeColors.white}
                            buttonContainerStyle={styles.btnView}
                        />
                    </View>}
                </View>
                <Spacer height={200} />
            </ScrollView>
            <DraggableBottomSheet
                currentIndex={index => {
                    setHomeIndex(index);
                    RenderUtilityScreens(index, props.navigation)

                }}
                homeIndex={homeIndex}
            />
        </View>
    );
};

export default ReservationManagementScreen;








