import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import UtilityScreen from './utilityTabs';
import UtilityHomeStack from './screens/home/stack';
import BookingScreen from './screens/booking';
import CheckInScreen from './screens/checkIn';
import ReservationManagementScreen from './screens/reservationManagement';
import FlightScheduleScreen from './screens/flightSchedule';
import FlightNetworkRoadMapScreen from './screens/flightNetworkRoadMap';
import ShareWithMeScreen from './screens/shareWithMe';
import AirportMapScreen from './screens/airportMap';
import SettingScreen from './screens/settings';
import UtilityMyProfileScreen from './screens/myProfile';
import SeacrhFlightScreen from './screens/flightSchedule/searchFlight';
import SeeTrackingScreen from './screens/shareWithMe/components/SeeTracking';
import AirPortsListScreen from './screens/flightNetworkRoadMap/components/AirPortsList';
import GoingAirPortMapScreen from './screens/flightNetworkRoadMap/goingAirport';
import FlightStartScreen from './screens/flightNetworkRoadMap/flightStart';
import ChooseDate from './screens/booking/chooseDate';
import ChooseFlight from './screens/booking/chooseFlight';
import SelectSeats from './screens/booking/selectSeats';
import PaymentScreen from './screens/booking/payment';
import PaymentCompletedScreen from './screens/booking/payment';
import ETicketsScreen from './screens/booking/eTicket';
import PasscodeScreen from './screens/booking/passcode';
import TransactionDetailScreen from './screens/booking/transactionDetails';
import PaymentDoneScreen from './screens/booking/paymentComplete';
import NotificationScreen from './screens/notifications';
import UserProfileScreen from '../community/screens/userProfile';
import SeeAllFlights from './screens/home/seeAllFlights';
import SearchMapScreen from './screens/flightNetworkRoadMap/components/SeachMap';


const ScreenOptions = { headerShown: false };
const Stack = createStackNavigator();

const UtilityStack = props => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
        >
            <Stack.Screen name="UtilityScreen" component={UtilityScreen} />
            <Stack.Screen name="UtilityHomeStack" component={UtilityHomeStack} />
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            <Stack.Screen name="CheckInScreen" component={CheckInScreen} />
            <Stack.Screen
                name="FlightScheduleScreen"
                component={FlightScheduleScreen}
            />
            <Stack.Screen
                name="FlightNetworkRoadMapScreen"
                component={FlightNetworkRoadMapScreen}
            />
            <Stack.Screen name="ShareWithMeScreen" component={ShareWithMeScreen} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <Stack.Screen name="AirportMapScreen" component={AirportMapScreen} />
            <Stack.Screen name="ReservationManagementScreen" component={ReservationManagementScreen} />
            <Stack.Screen name="SettingScreen" component={SettingScreen} />
            <Stack.Screen
                name="UtilityMyProfileScreen"
                component={UtilityMyProfileScreen}
            />
            <Stack.Screen name="SeacrhFlightScreen" component={SeacrhFlightScreen} />
            <Stack.Screen name="SeeTrackingScreen" component={SeeTrackingScreen} />
            <Stack.Screen name="AirPortsListScreen" component={AirPortsListScreen} />
            <Stack.Screen name="GoingAirPortMapScreen" component={GoingAirPortMapScreen} />
            <Stack.Screen name="FlightStartScreen" component={FlightStartScreen} />
            <Stack.Screen name="ChooseDate" component={ChooseDate} />
            <Stack.Screen name="ChooseFlight" component={ChooseFlight} />
            <Stack.Screen name="SelectSeats" component={SelectSeats} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="PaymentCompletedScreen" component={PaymentCompletedScreen} />
            <Stack.Screen name="ETicketsScreen" component={ETicketsScreen} />
            <Stack.Screen name="PasscodeScreen" component={PasscodeScreen} />
            <Stack.Screen name="TransactionDetailScreen" component={TransactionDetailScreen} />
            <Stack.Screen name="PaymentDoneScreen" component={PaymentDoneScreen} />
            <Stack.Screen name="UtilityUserProfileScreen" component={UserProfileScreen} />
            <Stack.Screen name="SeeAllFlights" component={SeeAllFlights} />
            <Stack.Screen name="SearchMapScreen" component={SearchMapScreen} />
        </Stack.Navigator>
    );
};

export default UtilityStack;
