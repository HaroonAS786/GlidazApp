import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LiveStream from '.';
import ChatScreen from '../chat';
import FriendsScreen from '../friends';

const ScreenOptions = { headerShown: false };
const Stack = createStackNavigator();

const LiveStreamStack = props => {

    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
        >
            <Stack.Screen name="LiveStream" component={LiveStream} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
        </Stack.Navigator>
    );
};

export default LiveStreamStack;
