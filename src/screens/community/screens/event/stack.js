import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import EventScreen from '.';
import ChatScreen from '../chat';
import FriendsScreen from '../friends';
import EventCategory from './components/eventCategory';

const ScreenOptions = { headerShown: false };

const Stack = createStackNavigator();

const EventStack = props => {

    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
        >
            <Stack.Screen name="EventScreen" component={EventScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
            <Stack.Screen name="EventCategory" component={EventCategory} />

        </Stack.Navigator>
    );
};

export default EventStack;
